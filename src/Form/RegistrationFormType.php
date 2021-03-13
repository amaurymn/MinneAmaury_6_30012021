<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', TextType::class, [
                'label'       => 'First Name',
                'required'    => true,
                'constraints' => [
                    new NotBlank(['message' => 'Please add your Firstname']),
                    new Length([
                        'max'        => 255,
                        'maxMessage' => 'Your firstname is too long.',
                    ]),
                ]
            ])
            ->add('lastName', TextType::class, [
                'label'       => 'Last Name',
                'required'    => true,
                'constraints' => [
                    new NotBlank(['message' => 'Please add your Lastname']),
                    new Length([
                        'max'        => 255,
                        'maxMessage' => 'Your lastname is too long.',
                    ]),
                ]
            ])
            ->add('username', TextType::class, [
                'label'       => 'Username',
                'required'    => true,
                'constraints' => [
                    new NotBlank(['message' => 'Please add your Username']),
                    new Length([
                        'max'        => 180,
                        'maxMessage' => 'Your username is too long.',
                    ]),
                ]
            ])
            ->add('email', EmailType::class, [
                'label'       => 'Email',
                'required'    => true,
                'constraints' => [
                    new Email(['message' => 'The email "{{ value }}" is not a valid email.']),
                    new NotBlank(['message' => 'Please add your Email']),
                    new Length([
                        'max'        => 255,
                        'maxMessage' => 'Your email is too long.',
                    ]),
                ]
            ])
            ->add('plainPassword', RepeatedType::class, [
                'label'           => 'Password',
                'required'        => true,
                'type'            => PasswordType::class,
                'invalid_message' => 'Passwords does not match',
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped'          => false,
                'constraints'     => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min'        => 8,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        'max'        => 255,
                        'maxMessage' => 'Your password is too long.',
                    ]),
                ],
                'first_options'   => ['label' => 'Password'],
                'second_options'  => ['label' => 'Repeat Password']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'  => User::class,
            'constraints' => [
                new UniqueEntity([
                    'fields'  => ['email'],
                    'message' => 'This email is already used'
                ]),
                new UniqueEntity([
                    'fields'  => ['username'],
                    'message' => 'This username is already used'
                ]),
            ]
        ]);
    }
}

