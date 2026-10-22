import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthConfigPaginationSchema, type OAuthConfigPagination } from "./oauth-config-pagination.js";
import { oAuthConfigSchema, type OAuthConfig } from "./oauth-config.js";

export type OauthResponse = {
  success: boolean;
  oauthConfigs: OAuthConfig[];
  pagination: OAuthConfigPagination;
};

export const oauthResponseSchema: Schema<OauthResponse> = s.object<OauthResponse>({
  success: s.boolean(),
  oauthConfigs: s.array(s.lazy(() => oAuthConfigSchema)),
  pagination: oAuthConfigPaginationSchema,
});
