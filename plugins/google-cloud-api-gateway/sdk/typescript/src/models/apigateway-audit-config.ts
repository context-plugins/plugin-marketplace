import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apigatewayAuditLogConfigSchema,
  type ApigatewayAuditLogConfig,
} from "./apigateway-audit-log-config.js";

/**
 * Specifies the audit configuration for a service. The configuration determines which permission
 * types are logged, and what identities, if any, are exempted from logging. An AuditConfig must
 * have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific
 * service, the union of the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.
 * Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices",
 * "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ]
 * }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service":
 * "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type":
 * "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this
 * policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com`
 * from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
 */
export type ApigatewayAuditConfig = {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ApigatewayAuditLogConfig[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that
   * covers all services.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayAuditConfigSchema: Schema<ApigatewayAuditConfig> = s.object<ApigatewayAuditConfig>(
  {
    auditLogConfigs: s.optional(s.array(s.lazy(() => apigatewayAuditLogConfigSchema))),
    service: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
