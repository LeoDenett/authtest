<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SongsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SongsRepository::class)]
#[ApiResource]
class Songs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $Title;

    #[ORM\Column(type: 'string', length: 255)]
    private $Artist;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): self
    {
        $this->Title = $Title;

        return $this;
    }

    public function getArtist(): ?string
    {
        return $this->Artist;
    }

    public function setArtist(string $Artist): self
    {
        $this->Artist = $Artist;

        return $this;
    }
}
