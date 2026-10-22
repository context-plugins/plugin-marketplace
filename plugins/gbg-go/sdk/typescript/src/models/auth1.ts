import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Auth1 = {
  id: string;
  scope?: string;
  codeVerifier?: string;
  code?: string;
  state?: string;
  redirectUri?: string;
  responseType?: string;
  clientId?: string;
  clientSecret?: string;
};

export const auth1Schema: Schema<Auth1> = s.object<Auth1>({
  id: s.string(),
  scope: s.optional(s.string()),
  codeVerifier: s.optional(s.string()),
  code: s.optional(s.string()),
  state: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  responseType: s.optional(s.string()),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
});
