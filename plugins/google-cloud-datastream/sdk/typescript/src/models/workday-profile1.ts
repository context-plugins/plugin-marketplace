import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  oauthRefreshTokenCredentials2Schema,
  type OauthRefreshTokenCredentials2,
} from "./oauth-refresh-token-credentials2.js";

/** Optional. Profile for connecting to a Workday source. */
export type WorkdayProfile1 = {
  /** Required. Tenant for the Workday connection (e.g., `google12`). */
  tenant?: string;
  /**
   * Required. Credentials for authenticating with the Workday API. OAuth Refresh Token credentials
   * for authenticating with the Workday API.
   */
  oauthRefreshTokenCredentials?: OauthRefreshTokenCredentials2;
  /**
   * Required. Host for the Workday connection. Must be a valid hostname (e.g.,
   * `wd3-impl-services1.workday.com`).
   */
  host?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workdayProfile1Schema: Schema<WorkdayProfile1> = s.object<WorkdayProfile1>(
  {
    tenant: s.optional(s.string()),
    oauthRefreshTokenCredentials: s.optional(s.lazy(() => oauthRefreshTokenCredentials2Schema)),
    host: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
