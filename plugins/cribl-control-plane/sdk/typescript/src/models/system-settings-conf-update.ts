import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiSchema, type Api } from "./api.js";
import { appsSchema, type Apps } from "./apps.js";
import { customLogoSchema, type CustomLogo } from "./custom-logo.js";
import { proxySchema, type Proxy } from "./proxy.js";
import { shutdownSchema, type Shutdown } from "./shutdown.js";
import {
  socketsTypeSystemSettingsConfSchema,
  type SocketsTypeSystemSettingsConf,
} from "./sockets-type-system-settings-conf.js";
import { supportSchema, type Support } from "./support.js";
import { system2Schema, type System2 } from "./system2.js";
import { backupsSettings1Schema, type BackupsSettings1 } from "./unions/backups-settings1.js";
import { piiSettings1Schema, type PiiSettings1 } from "./unions/pii-settings1.js";
import { rollbackSettings1Schema, type RollbackSettings1 } from "./unions/rollback-settings1.js";
import { sniSettings1Schema, type SniSettings1 } from "./unions/sni-settings1.js";
import { tlsSettings1Schema, type TlsSettings1 } from "./unions/tls-settings1.js";
import { upgradeGroupSettings2Schema, type UpgradeGroupSettings2 } from "./upgrade-group-settings2.js";
import { upgradeSettings2Schema, type UpgradeSettings2 } from "./upgrade-settings2.js";
import { workers1Schema, type Workers1 } from "./workers1.js";

export type SystemSettingsConfUpdate = {
  /** API server configuration for the Cribl instance. */
  api?: Api;
  /** App configuration. */
  apps?: Apps;
  /** Configuration backup settings, including storage location and retention period. */
  backups?: BackupsSettings1;
  /** Custom logo configuration for the Cribl UI login page and navigation bar. */
  customLogo?: CustomLogo;
  /** Personally identifiable information (PII) detection configuration. */
  pii?: PiiSettings1;
  /** HTTP proxy configuration for outbound connections. */
  proxy?: Proxy;
  /** Automatic rollback settings applied when an upgrade fails. */
  rollback?: RollbackSettings1;
  /** Graceful shutdown configuration. */
  shutdown?: Shutdown;
  /** Server Name Indication (SNI) routing configuration. */
  sni?: SniSettings1;
  /** Unix domain socket configuration. */
  sockets?: SocketsTypeSystemSettingsConf;
  /** Support and diagnostics settings. */
  support?: Support;
  /** System-level operational settings for the Cribl instance. */
  system?: System2;
  /**
   * Global TLS/SSL settings applied to all outbound connections that do not specify their own TLS
   * configuration.
   */
  tls?: TlsSettings1;
  /** Rolling upgrade group settings that control how many nodes are upgraded at a time. */
  upgradeGroupSettings?: UpgradeGroupSettings2;
  /** Automatic upgrade scheduling and package source configuration. */
  upgradeSettings?: UpgradeSettings2;
  /** Worker Process configuration. */
  workers?: Workers1;
};

export const systemSettingsConfUpdateSchema: Schema<SystemSettingsConfUpdate> =
  s.object<SystemSettingsConfUpdate>({
    api: s.optional(s.lazy(() => apiSchema)),
    apps: s.optional(s.lazy(() => appsSchema)),
    backups: s.optional(s.lazy(() => backupsSettings1Schema)),
    customLogo: s.optional(s.lazy(() => customLogoSchema)),
    pii: s.optional(s.lazy(() => piiSettings1Schema)),
    proxy: s.optional(s.lazy(() => proxySchema)),
    rollback: s.optional(s.lazy(() => rollbackSettings1Schema)),
    shutdown: s.optional(s.lazy(() => shutdownSchema)),
    sni: s.optional(s.lazy(() => sniSettings1Schema)),
    sockets: s.optional(s.lazy(() => socketsTypeSystemSettingsConfSchema)),
    support: s.optional(s.lazy(() => supportSchema)),
    system: s.optional(s.lazy(() => system2Schema)),
    tls: s.optional(s.lazy(() => tlsSettings1Schema)),
    upgradeGroupSettings: s.optional(s.lazy(() => upgradeGroupSettings2Schema)),
    upgradeSettings: s.optional(s.lazy(() => upgradeSettings2Schema)),
    workers: s.optional(s.lazy(() => workers1Schema)),
  });
