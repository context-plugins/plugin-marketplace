import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthConfigs = {
  authorizeUrl?: string;
  tokenUrl?: string;
  redirectUri?: string;
  scopes?: string[];
};

export const oauthConfigsSchema: Schema<OauthConfigs> = s.object<OauthConfigs>({
  authorizeUrl: s.optional(s.string()),
  tokenUrl: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
});
