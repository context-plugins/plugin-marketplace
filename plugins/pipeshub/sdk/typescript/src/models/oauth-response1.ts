import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorPaginationSchema, type ConnectorPagination } from "./connector-pagination.js";
import { oAuthConfigSchema, type OAuthConfig } from "./oauth-config.js";

export type OauthResponse1 = {
  success: boolean;
  oauthConfigs: OAuthConfig[];
  pagination?: ConnectorPagination;
};

export const oauthResponse1Schema: Schema<OauthResponse1> = s.object<OauthResponse1>({
  success: s.boolean(),
  oauthConfigs: s.array(s.lazy(() => oAuthConfigSchema)),
  pagination: s.optional(s.lazy(() => connectorPaginationSchema)),
});
