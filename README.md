# Ryvie-rTransfer 🐧

**English** · [Français](README.fr.md)

> Part of the [Ryvie](https://github.com/ryvieos/Ryvie) ecosystem, the self-hosted personal cloud OS. Learn more at [ryvie.fr](https://ryvie.fr).

> **Fork of [Pingvin Share](https://github.com/stonith404/pingvin-share)** - A self-hosted, simple and secure file sharing platform for your personal cloud.

## About

Ryvie-rTransfer is a customized fork of Pingvin Share with specific improvements:
- LDAP authentication with a secure password via environment variables
- Optimized development configuration with hot reload
- Automatic redirect to the login page
- Improved login interface with a loading indicator

## Quick start

### Production (Docker Compose)

```bash
docker compose up -d
```

The application will be accessible at `http://localhost:3011`

### Development (with hot reload)

See [README.dev.md](./README.dev.md) for detailed development instructions.

```bash
# Lancer l'environnement de développement
docker compose -f docker-compose.dev.yml up

# Frontend: http://localhost:3011
# Backend API: http://localhost:8082
```

## Configuration

### Environment variables

Create a `.env` file at the root of the project:

```env
APP_URL=https://votre-domaine.fr
LDAP_BIND_PASSWORD=votre_mot_de_passe_ldap
```

### LDAP configuration

Edit `config.yaml` to configure LDAP authentication:

```yaml
ldap:
  enabled: "true"
  url: ldap://votre-serveur-ldap:389
  bindDn: cn=admin,dc=example,dc=org
  bindPassword: ""  # Laissez vide, utilisez LDAP_BIND_PASSWORD dans .env
  searchBase: ou=users,dc=example,dc=org
  searchQuery: (uid=%username%)
```

## Local installation (without Docker)

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

- [Development guide](./README.dev.md) - Hot reload configuration, CPU/RAM limits, etc.
- [Pingvin Share documentation](https://github.com/stonith404/pingvin-share) - Documentation of the original project

## Credits

This project is a fork of [Pingvin Share](https://github.com/stonith404/pingvin-share) created by [stonith404](https://github.com/stonith404).

## License

See the original project [Pingvin Share](https://github.com/stonith404/pingvin-share) for license information.
