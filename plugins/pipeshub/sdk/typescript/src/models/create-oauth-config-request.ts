import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { config2Schema, type Config2 } from "./config2.js";

/**
 * Request to create OAuth configuration (admin only). Stores credentials that users select when
 * setting up connectors.
 */
export type CreateOAuthConfigRequest = {
  /** Display name for this OAuth configuration (e.g., 'Production Google OAuth') */
  oauthInstanceName: string;
  /** OAuth application credentials */
  config: Config2;
  /**
   * PipesHub's public origin, prefixed to the connector's redirect path to build the stored
   * redirectUri. When omitted, the frontend public endpoint is used. Not the provider's URL; a
   * self-hosted provider's address goes in config.
   */
  baseUrl?: string;
};

export const createOAuthConfigRequestSchema: Schema<CreateOAuthConfigRequest> =
  s.object<CreateOAuthConfigRequest>({
    oauthInstanceName: s.string(),
    config: config2Schema,
    baseUrl: s.optional(s.string()),
  });
