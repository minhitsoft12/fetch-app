<?php

namespace App\Controller;

use AppBundle\Rss\Xml;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RssController extends AbstractController
{
    /**
     * @Route("/rss", name="rss-feed")
     */
    public function index()
    {
        $posts = $this->getDoctrine()
            ->getRepository('AppBundle:Post')
            ->fetch();

        $response = new Response();
        $response->headers->set("Content-type", "text/xml");
        $response->setContent(Xml::generate($posts));
        return $response;
    }
}
