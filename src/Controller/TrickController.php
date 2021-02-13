<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class TrickController
{
    /**
     * @Route ("/tricks/details/{slug}", name="tricks_details")
     */
    public function detail()
    {
    }

    /**
     * @Route ("/tricks/create", name="tricks_create")
     */
    public function create()
    {
    }

    /**
     * @Route ("/tricks/update/{id}", name="tricks_update")
     */
    public function update()
    {
    }

    /**
     * @Route ("/tricks/delete/{id}", name="tricks_delete")
     */
    public function delete()
    {
    }
}
