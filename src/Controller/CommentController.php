<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class CommentController
{

    /**
     * @Route ("/comment/create", name="comment_create")
     */
    public function create()
    {
    }

    /**
     * @Route ("/comment/delete/{id}", name="comment_delete")
     */
    public function delete()
    {
    }
}
