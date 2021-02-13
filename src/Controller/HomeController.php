<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class HomeController
{

    /**
     * @Route ("/", name="home_page")
     */
    public function showHome()
    {
    }

}
