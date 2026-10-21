import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import {
  connectorDocumentationLinkSchema,
  type ConnectorDocumentationLink,
} from "./connector-documentation-link.js";
import { connectorSchemaSchema, type ConnectorSchema } from "./connector-schema.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";
import { lastSyncOutcomeSchema, type LastSyncOutcome } from "./last-sync-outcome.js";

/** A connector instance: its type's registry entry plus the instance's own state. */
export type ConnectorInstance = {
  /** Connector instance ID */
  key?: string;
  /** Instance name */
  name?: string;
  /** Connector type */
  type?: string;
  appGroup?: string;
  supportedAuthTypes?: ConnectorAuthType[];
  appDescription?: string;
  appCategories?: string[];
  iconPath?: string;
  supportsRealtime?: boolean;
  supportsSync?: boolean;
  supportsAgent?: boolean;
  documentationLinks?: ConnectorDocumentationLink[];
  isAdminAccessRequired?: boolean;
  /** For a team connector type, its personal counterpart, if any */
  personalConnectorType?: string | null;
  /** Guidance shown before setup */
  connectorInfo?: string | null;
  /**
   * How a connector instance signs in to its source. Each connector type supports a subset; see
   * `supportedAuthTypes` in the registry.
   */
  authType?: ConnectorAuthType;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  scope?: ConnectorScope;
  /** Sync is on */
  isActive?: boolean;
  /** Agents may use this connector */
  isAgentActive?: boolean;
  /** Sync settings are saved; sync can be enabled */
  isConfigured?: boolean;
  /** OAuth sign-in has completed */
  isAuthenticated?: boolean;
  /** A sync or deletion holds the connector */
  isLocked?: boolean;
  /** Lifecycle status, for example SYNCING or DELETING */
  status?: string | null;
  pendingFullSync?: boolean;
  desktopOnline?: boolean;
  /** Local FS only. The desktop device that owns this connector */
  ownerDeviceId?: string | null;
  /** Local FS only. Display name of the desktop device that owns this connector */
  ownerDeviceName?: string | null;
  createdBy?: string;
  /** Null for an instance nobody has updated, for example the personal KB connector */
  updatedBy?: string | null;
  /** Epoch milliseconds */
  createdAtTimestamp?: number;
  /** Epoch milliseconds */
  updatedAtTimestamp?: number;
  /** Epoch ms when the last sync run started; absent before the first run */
  lastSyncStartedAtTimestamp?: number | null;
  /** Epoch ms when the last sync run ended, however it ended; absent until a run ends */
  lastSyncFinishedAtTimestamp?: number | null;
  /** How the last sync run ended */
  lastSyncOutcome?: LastSyncOutcome | null;
  /**
   * What the last run did, in the connector's own terms. For a Web connector: pagesSaved (written
   * this run), pagesStored (kept after it, which Maximum pages caps), pagesVisited, failed,
   * failedByStatus, robotsSkipped, noindexSkipped, skippedMaxPages, deferred, pruned, sitemapUrls,
   * stopReason (max_pages, time_limit, stalled, rate_limited or null) and resumed.
   */
  lastSyncSummary?: Record<string, unknown> | null;
  /**
   * Configuration form for a connector type: the auth fields per auth type, the sync strategies and
   * settings, and the sync and indexing filters.
   */
  config?: ConnectorSchema;
};

export const connectorInstanceSchema: Schema<ConnectorInstance> = s.object<ConnectorInstance>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  appGroup: s.optional(s.string()),
  supportedAuthTypes: s.optional(s.array(s.lazy(() => connectorAuthTypeSchema))),
  appDescription: s.optional(s.string()),
  appCategories: s.optional(s.array(s.string())),
  iconPath: s.optional(s.string()),
  supportsRealtime: s.optional(s.boolean()),
  supportsSync: s.optional(s.boolean()),
  supportsAgent: s.optional(s.boolean()),
  documentationLinks: s.optional(s.array(s.lazy(() => connectorDocumentationLinkSchema))),
  isAdminAccessRequired: s.optional(s.boolean()),
  personalConnectorType: s.optionalNullable(s.string()),
  connectorInfo: s.optionalNullable(s.string()),
  authType: s.optional(s.lazy(() => connectorAuthTypeSchema)),
  scope: s.optional(s.lazy(() => connectorScopeSchema)),
  isActive: s.optional(s.boolean()),
  isAgentActive: s.optional(s.boolean()),
  isConfigured: s.optional(s.boolean()),
  isAuthenticated: s.optional(s.boolean()),
  isLocked: s.optional(s.boolean()),
  status: s.optionalNullable(s.string()),
  pendingFullSync: s.optional(s.boolean()),
  desktopOnline: s.optional(s.boolean()),
  ownerDeviceId: s.optionalNullable(s.string()),
  ownerDeviceName: s.optionalNullable(s.string()),
  createdBy: s.optional(s.string()),
  updatedBy: s.optionalNullable(s.string()),
  createdAtTimestamp: s.optional(s.int()),
  updatedAtTimestamp: s.optional(s.int()),
  lastSyncStartedAtTimestamp: s.optionalNullable(s.int()),
  lastSyncFinishedAtTimestamp: s.optionalNullable(s.int()),
  lastSyncOutcome: s.optionalNullable(s.lazy(() => lastSyncOutcomeSchema)),
  lastSyncSummary: s.optionalNullable(s.record(s.string(), s.unknown())),
  config: s.optional(s.lazy(() => connectorSchemaSchema)),
  _keysMap: {
    key: "_key",
  },
});
