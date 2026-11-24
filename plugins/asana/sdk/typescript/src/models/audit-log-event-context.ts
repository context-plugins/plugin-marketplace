import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiAuthenticationMethodSchema, type ApiAuthenticationMethod } from "./api-authentication-method.js";
import { contextTypeSchema, type ContextType } from "./context-type.js";

/** The context from which this event originated. */
export type AuditLogEventContext = {
  /**
   * The type of context. Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`,
   * `email`, or `api`.
   */
  contextType?: ContextType;
  /**
   * The authentication method used in the context of an API request. Only present if the
   * `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or
   * `service_account`.
   */
  apiAuthenticationMethod?: ApiAuthenticationMethod;
  /** The IP address of the client that initiated the event, if applicable. */
  clientIpAddress?: string;
  /** The user agent of the client that initiated the event, if applicable. */
  userAgent?: string;
  /**
   * The name of the OAuth App that initiated the event. Only present if the
   * `api_authentication_method` is `oauth`.
   */
  oauthAppName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogEventContextSchema: Schema<AuditLogEventContext> = s.object<AuditLogEventContext>(
  {
    contextType: s.optional(s.lazy(() => contextTypeSchema)),
    apiAuthenticationMethod: s.optional(s.lazy(() => apiAuthenticationMethodSchema)),
    clientIpAddress: s.optional(s.string()),
    userAgent: s.optional(s.string()),
    oauthAppName: s.optional(s.string()),
    _keysMap: {
      contextType: "context_type",
      apiAuthenticationMethod: "api_authentication_method",
      clientIpAddress: "client_ip_address",
      userAgent: "user_agent",
      oauthAppName: "oauth_app_name",
    },
  },
  { additionalProperties: s.json() },
);
