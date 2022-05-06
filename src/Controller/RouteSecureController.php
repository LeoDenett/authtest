<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RouteSecureController extends AbstractController
{
    #[Route('/secure', name: 'app_route_secure')]
    public function index(): Response
    {
        return $this->render('route_secure/index.html.twig', [
            'controller_name' => 'RouteSecureController',
        ]);
    }
}
