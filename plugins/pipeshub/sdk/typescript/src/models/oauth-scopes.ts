import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Provider scopes requested for each way the connector is used */
export type OauthScopes = {
  personalSync: string[];
  teamSync: string[];
  agent: string[];
};

export const oauthScopesSchema: Schema<OauthScopes> = s.object<OauthScopes>({
  personalSync: s.array(s.string()),
  teamSync: s.array(s.string()),
  agent: s.array(s.string()),
});
