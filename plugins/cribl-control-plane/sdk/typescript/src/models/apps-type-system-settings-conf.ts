import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** App configuration. */
export type AppsTypeSystemSettingsConf = {
  /**
   * Public origin for App Platform backend broker callbacks (standalone/on-prem only). Must be an
   * absolute HTTP(S) URL.
   */
  appBackendBrokerOrigin?: string;
  /**
   * Maximum number of broker callbacks per minute a single app backend installation may make.
   * Over-limit callbacks receive HTTP 429.
   */
  appBackendMaxCallbacksPerInstallation?: number;
  /**
   * Maximum number of broker callbacks per minute across all app backend installations on this
   * Leader. Unlimited when unset. Over-limit callbacks receive HTTP 429.
   */
  appBackendMaxCallbacksTotal?: number;
  /**
   * Maximum number of concurrent App Platform backend invocations across all apps on this Leader.
   */
  appBackendMaxInFlight?: number;
  /** Maximum number of characters allowed in a schedule bodyExpression. */
  appScheduleBodyExpressionMaxLength?: number;
  /**
   * Maximum number of concurrent scheduled App Platform function jobs across all apps on this
   * Leader (group-wide). Changes require a Leader restart.
   */
  appScheduledConcurrentJobLimit?: number;
  /** Maximum number of schedule records a single App may declare. */
  appSchedulesMax?: number;
  /** If <code>true</code>, enable Apps. Otherwise, <code>false</code>. */
  enabled: boolean;
};

export const appsTypeSystemSettingsConfSchema: Schema<AppsTypeSystemSettingsConf> =
  s.object<AppsTypeSystemSettingsConf>({
    appBackendBrokerOrigin: s.optional(s.string()),
    appBackendMaxCallbacksPerInstallation: s.optional(s.int()),
    appBackendMaxCallbacksTotal: s.optional(s.int()),
    appBackendMaxInFlight: s.optional(s.int()),
    appScheduleBodyExpressionMaxLength: s.optional(s.int()),
    appScheduledConcurrentJobLimit: s.optional(s.int()),
    appSchedulesMax: s.optional(s.int()),
    enabled: s.boolean(),
  });
