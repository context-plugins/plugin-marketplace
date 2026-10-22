import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiTypeSystemSettingsConfSchema,
  type ApiTypeSystemSettingsConf,
} from "./api-type-system-settings-conf.js";
import {
  appsTypeSystemSettingsConfSchema,
  type AppsTypeSystemSettingsConf,
} from "./apps-type-system-settings-conf.js";
import {
  customLogoTypeSystemSettingsConfSchema,
  type CustomLogoTypeSystemSettingsConf,
} from "./custom-logo-type-system-settings-conf.js";
import {
  proxyTypeSystemSettingsConfSchema,
  type ProxyTypeSystemSettingsConf,
} from "./proxy-type-system-settings-conf.js";
import {
  shutdownTypeSystemSettingsConfSchema,
  type ShutdownTypeSystemSettingsConf,
} from "./shutdown-type-system-settings-conf.js";
import {
  socketsTypeSystemSettingsConfSchema,
  type SocketsTypeSystemSettingsConf,
} from "./sockets-type-system-settings-conf.js";
import {
  supportTypeSystemSettingsConfSchema,
  type SupportTypeSystemSettingsConf,
} from "./support-type-system-settings-conf.js";
import {
  systemTypeSystemSettingsConfSchema,
  type SystemTypeSystemSettingsConf,
} from "./system-type-system-settings-conf.js";
import { backupsSettings1Schema, type BackupsSettings1 } from "./unions/backups-settings1.js";
import { piiSettings1Schema, type PiiSettings1 } from "./unions/pii-settings1.js";
import { rollbackSettings1Schema, type RollbackSettings1 } from "./unions/rollback-settings1.js";
import { sniSettings1Schema, type SniSettings1 } from "./unions/sni-settings1.js";
import { tlsSettings1Schema, type TlsSettings1 } from "./unions/tls-settings1.js";
import { upgradeGroupSettings2Schema, type UpgradeGroupSettings2 } from "./upgrade-group-settings2.js";
import { upgradeSettings2Schema, type UpgradeSettings2 } from "./upgrade-settings2.js";
import {
  workersTypeSystemSettingsConfSchema,
  type WorkersTypeSystemSettingsConf,
} from "./workers-type-system-settings-conf.js";

export type SystemSettingsConf = {
  /** API server configuration for the Cribl instance. */
  api: ApiTypeSystemSettingsConf;
  /** App configuration. */
  apps?: AppsTypeSystemSettingsConf;
  /** Configuration backup settings, including storage location and retention period. */
  backups: BackupsSettings1;
  /** Custom logo configuration for the Cribl UI login page and navigation bar. */
  customLogo?: CustomLogoTypeSystemSettingsConf;
  /** Personally identifiable information (PII) detection configuration. */
  pii: PiiSettings1;
  /** HTTP proxy configuration for outbound connections. */
  proxy: ProxyTypeSystemSettingsConf;
  /** Automatic rollback settings applied when an upgrade fails. */
  rollback: RollbackSettings1;
  /** Graceful shutdown configuration. */
  shutdown: ShutdownTypeSystemSettingsConf;
  /** Server Name Indication (SNI) routing configuration. */
  sni: SniSettings1;
  /** Unix domain socket configuration. */
  sockets?: SocketsTypeSystemSettingsConf;
  /** Support and diagnostics settings. */
  support?: SupportTypeSystemSettingsConf;
  /** System-level operational settings for the Cribl instance. */
  system: SystemTypeSystemSettingsConf;
  /**
   * Global TLS/SSL settings applied to all outbound connections that do not specify their own TLS
   * configuration.
   */
  tls: TlsSettings1;
  /** Rolling upgrade group settings that control how many nodes are upgraded at a time. */
  upgradeGroupSettings: UpgradeGroupSettings2;
  /** Automatic upgrade scheduling and package source configuration. */
  upgradeSettings: UpgradeSettings2;
  /** Worker Process configuration. */
  workers: WorkersTypeSystemSettingsConf;
};

export const systemSettingsConfSchema: Schema<SystemSettingsConf> = s.object<SystemSettingsConf>({
  api: apiTypeSystemSettingsConfSchema,
  apps: s.optional(s.lazy(() => appsTypeSystemSettingsConfSchema)),
  backups: backupsSettings1Schema,
  customLogo: s.optional(s.lazy(() => customLogoTypeSystemSettingsConfSchema)),
  pii: piiSettings1Schema,
  proxy: proxyTypeSystemSettingsConfSchema,
  rollback: rollbackSettings1Schema,
  shutdown: shutdownTypeSystemSettingsConfSchema,
  sni: sniSettings1Schema,
  sockets: s.optional(s.lazy(() => socketsTypeSystemSettingsConfSchema)),
  support: s.optional(s.lazy(() => supportTypeSystemSettingsConfSchema)),
  system: systemTypeSystemSettingsConfSchema,
  tls: tlsSettings1Schema,
  upgradeGroupSettings: upgradeGroupSettings2Schema,
  upgradeSettings: upgradeSettings2Schema,
  workers: workersTypeSystemSettingsConfSchema,
});
