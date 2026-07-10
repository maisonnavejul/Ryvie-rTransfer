# Ryvie-rTransfer 🐧

[English](README.md) · **Français**

> Fait partie de l'écosystème [Ryvie](https://github.com/ryvieos/Ryvie), l'OS de cloud personnel auto-hébergé. Plus d'infos sur [ryvie.fr](https://ryvie.fr).

> **Fork de [Pingvin Share](https://github.com/stonith404/pingvin-share)** - Une plateforme de partage de fichiers auto-hébergée, simple et sécurisée.

## À propos

Ryvie-rTransfer est un fork personnalisé de Pingvin Share avec des améliorations spécifiques :
- Authentification LDAP avec mot de passe sécurisé via variables d'environnement
- Configuration de développement optimisée avec hot reload
- Redirection automatique vers la page de connexion
- Interface de connexion améliorée avec indicateur de chargement

## Démarrage rapide

### Production (Docker Compose)

```bash
docker compose up -d
```

L'application sera accessible sur `http://localhost:3011`

### Développement (avec hot reload)

Voir [README.dev.md](./README.dev.md) pour les instructions détaillées de développement.

```bash
# Lancer l'environnement de développement
docker compose -f docker-compose.dev.yml up

# Frontend: http://localhost:3011
# Backend API: http://localhost:8082
```

## Configuration

### Variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
APP_URL=https://votre-domaine.fr
LDAP_BIND_PASSWORD=votre_mot_de_passe_ldap
```

### Configuration LDAP

Éditer `config.yaml` pour configurer l'authentification LDAP :

```yaml
ldap:
  enabled: "true"
  url: ldap://votre-serveur-ldap:389
  bindDn: cn=admin,dc=example,dc=org
  bindPassword: ""  # Laissez vide, utilisez LDAP_BIND_PASSWORD dans .env
  searchBase: ou=users,dc=example,dc=org
  searchQuery: (uid=%username%)
```

## Installation locale (sans Docker)

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Documentation

- [Guide de développement](./README.dev.md) - Configuration hot reload, limites CPU/RAM, etc.
- [Documentation Pingvin Share](https://github.com/stonith404/pingvin-share) - Documentation du projet original

## Crédits

Ce projet est un fork de [Pingvin Share](https://github.com/stonith404/pingvin-share) créé par [stonith404](https://github.com/stonith404).

## Licence

Voir le projet original [Pingvin Share](https://github.com/stonith404/pingvin-share) pour les informations de licence.
