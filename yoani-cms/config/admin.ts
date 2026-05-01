import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => {
  const adminJwtSecret = env('ADMIN_JWT_SECRET');
  const apiTokenSalt = env('API_TOKEN_SALT');
  const transferTokenSalt = env('TRANSFER_TOKEN_SALT');
  const encryptionKey = env('ENCRYPTION_KEY');

  if (!adminJwtSecret) {
    throw new Error('ADMIN_JWT_SECRET environment variable is required');
  }

  if (!apiTokenSalt) {
    throw new Error('API_TOKEN_SALT environment variable is required');
  }

  if (!transferTokenSalt) {
    throw new Error('TRANSFER_TOKEN_SALT environment variable is required');
  }

  if (!encryptionKey) {
    throw new Error('ENCRYPTION_KEY environment variable is required');
  }

  return {
    auth: {
      secret: adminJwtSecret,
    },
    apiToken: {
      salt: apiTokenSalt,
    },
    transfer: {
      token: {
        salt: transferTokenSalt,
      },
    },
    secrets: {
      encryptionKey,
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};

export default config;
