import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logTypeSchema, type LogType } from "./log-type.js";

/**
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ {
 * "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type":
 * "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
 * jose@example.com from DATA_READ logging.
 */
export type AuditLogConfig = {
  /** The log type that this config enables. */
  logType?: LogType;
  /**
   * Specifies the identities that do not cause logging for this type of permission. Follows the
   * same format of Binding.members.
   */
  exemptedMembers?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auditLogConfigSchema: Schema<AuditLogConfig> = s.object<AuditLogConfig>(
  {
    logType: s.optional(s.lazy(() => logTypeSchema)),
    exemptedMembers: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
