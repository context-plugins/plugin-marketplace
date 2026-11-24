import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tokenApplicationSchema, type TokenApplication } from "./token-application.js";

/** Metadata for the current access token. */
export type TokenInfoResponse = {
  resourceOwnerId?: string;
  scope?: string;
  expiresInSeconds?: number;
  /** OAuth application metadata attached to token info responses. */
  application?: TokenApplication;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenInfoResponseSchema: Schema<TokenInfoResponse> = s.object<TokenInfoResponse>(
  {
    resourceOwnerId: s.optional(s.string()),
    scope: s.optional(s.string()),
    expiresInSeconds: s.optional(s.int()),
    application: s.optional(s.lazy(() => tokenApplicationSchema)),
    createdAt: s.optional(s.int()),
    _keysMap: {
      resourceOwnerId: "resource_owner_id",
      expiresInSeconds: "expires_in_seconds",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
