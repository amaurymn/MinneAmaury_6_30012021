<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrickController extends AbstractController
{
    /**
     * Create new trick
     * @Route ("/tricks/create", name="tricks_create")
     */
    public function create(): Response
    {
        return $this->render('tricks/trickCreate.html.twig');
    }

    /**
     * Get single trick page
     * @Route ("/tricks/{slug}", name="tricks_details")
     */
    public function detail(): Response
    {
        return $this->render('tricks/trickDetails.html.twig');
    }

    /**
     * Update trick
     * @Route ("/tricks/{slug}/update", name="tricks_update")
     */
    public function update(): Response
    {
        return $this->render('tricks/trickUpdate.html.twig');
    }

    /**
     * Delete trick
     * @Route ("/tricks/{slug}/delete", name="tricks_delete")
     */
    public function delete(): Response
    {
        return new Response("Deleted trick");
    }

    /**
     * Return comments
     */
    public function getComments(): void
    {
    }
}
