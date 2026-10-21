import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";
import { distModeSchema, type DistMode } from "./dist-mode.js";
import { hbLeaderInfo2Schema, type HbLeaderInfo2 } from "./hb-leader-info2.js";

export type HbCriblInfo = {
  /** Automatically deployed Lookup file names and their deployed versions by context. */
  autoLookupVersions?: Record<string, string>;
  /** Configuration bundle and policy revision metadata for the node. */
  config: Config;
  /** Unique identifier for the deployment assigned for the node. */
  deploymentId?: string;
  /** If <code>true</code>, SNI-based routing to the Leader is disabled for the connection. */
  disableSniRouting?: boolean;
  /** Distributed deployment mode for the instance. */
  distMode: DistMode;
  /** Count of Edge nodes reported in the Leader heartbeat. */
  edgeNodes?: number;
  /** Worker Group or Edge Fleet name. */
  group: string;
  /** Unique instance identifier for the Cribl node. */
  guid: string;
  /**
   * Value of the <code>CRIBL_INSTALL_TYPE</code> environment variable, relayed for upgrade
   * decisions (since 4.5.0).
   */
  installType?: string;
  /** Deployed Lookup file names and their deployed versions by context. */
  lookupVersions?: Record<string, string>;
  /** Leader connection details when the node is a Worker or Edge reporting upstream. */
  master?: HbLeaderInfo2;
  /** Currently active overlay identifier on the node. Omitted if no overlay is active. */
  overlayId?: string;
  /** The process ID. */
  pid?: number;
  /** If <code>true</code>, SOCKS proxy connectivity is enabled for the node. */
  socksEnabled?: boolean;
  /** Timestamp (in Unix time) when the Cribl server process started, in milliseconds. */
  startTime: number;
  /** Tags from the node. */
  tags?: string[];
  /** Cribl software version string for the node. */
  version?: string;
};

export const hbCriblInfoSchema: Schema<HbCriblInfo> = s.object<HbCriblInfo>({
  autoLookupVersions: s.optional(s.record(s.string(), s.string())),
  config: configSchema,
  deploymentId: s.optional(s.string()),
  disableSniRouting: s.optional(s.boolean()),
  distMode: distModeSchema,
  edgeNodes: s.optional(s.int()),
  group: s.string(),
  guid: s.string(),
  installType: s.optional(s.string()),
  lookupVersions: s.optional(s.record(s.string(), s.string())),
  master: s.optional(s.lazy(() => hbLeaderInfo2Schema)),
  overlayId: s.optional(s.string()),
  pid: s.optional(s.int()),
  socksEnabled: s.optional(s.boolean()),
  startTime: s.int(),
  tags: s.optional(s.array(s.string())),
  version: s.optional(s.string()),
  _keysMap: {
    disableSniRouting: "disableSNIRouting",
  },
});
