import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { basicAuthInternalSchema, basicAuthSchema, type BasicAuth } from "../basic-auth.js";
import {
  bearerTokenAuthInternalSchema,
  bearerTokenAuthSchema,
  type BearerTokenAuth,
} from "../bearer-token-auth.js";

export type MediaAuth = (BasicAuth & { type: "basic_auth" }) | (BearerTokenAuth & { type: "bearer_token" });

export const mediaAuthInternalSchema: Schema<MediaAuth> = s.discriminatedUnion<MediaAuth>("type", {
  basic_auth: basicAuthInternalSchema,
  bearer_token: bearerTokenAuthInternalSchema,
});

export const mediaAuthSchema: Schema<MediaAuth> = s.lazySchema(() =>
  s.discriminatedUnion<MediaAuth>("type", {
    basic_auth: basicAuthSchema,
    bearer_token: bearerTokenAuthSchema,
  }),
);
