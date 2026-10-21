import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration bundle and policy revision metadata for the node. */
export type Config = {
  /**
   * Current API credentials revision string. Only used in leader <> leader universal subscription.
   */
  apiCredentialsRev?: string;
  /** Feature flags or feature revision string for the bundle. */
  featuresRev?: string;
  /** Worker-to-Leader heartbeat interval, in seconds. */
  hbPeriodSeconds?: number;
  /** GitOps or LogStream environment label associated with the bundle. */
  logStreamEnv?: string;
  /** Current policies revision string. */
  policyRev?: string;
  /** Current teams revision string. Only used in leader <> leader universal subscription. */
  teamsRev?: string;
  /** Current users revision string. Only used in leader <> leader universal subscription. */
  usersRev?: string;
  /** Configuration bundle version. */
  version?: string;
};

export const configSchema: Schema<Config> = s.object<Config>({
  apiCredentialsRev: s.optional(s.string()),
  featuresRev: s.optional(s.string()),
  hbPeriodSeconds: s.optional(s.int()),
  logStreamEnv: s.optional(s.string()),
  policyRev: s.optional(s.string()),
  teamsRev: s.optional(s.string()),
  usersRev: s.optional(s.string()),
  version: s.optional(s.string()),
});
