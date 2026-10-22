import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode77Schema, type Mode77 } from "./mode77.js";

export type SendConfiguration = {
  /** Full URL to send search to. */
  url?: string;
  /** Group within the workspace we're sending to. */
  group?: string;
  /** Workspace within the deployment to send the search results to. */
  workspace?: string;
  /** Template to build the URL to send from. */
  sendUrlTemplate?: string;
  /** Id of the search this function is running on. */
  searchId?: string;
  /** Tee results to search. When set to true results will be shipped instead of stats */
  tee?: boolean;
  /** How often are stats flushed in ms */
  flushMs?: number;
  /** Disables generation of intermediate stats. When true stats will be emitted only on end */
  suppressPreviews?: boolean;
  /**
   * In Sender mode, forwards search results directly to the destination. In Metrics mode,
   * accumulates metrics from federated send operators, and forwards the aggregate metrics.
   */
  mode?: Mode77;
};

export const sendConfigurationSchema: Schema<SendConfiguration> = s.object<SendConfiguration>({
  url: s.optional(s.string()),
  group: s.optional(s.string()),
  workspace: s.optional(s.string()),
  sendUrlTemplate: s.optional(s.string()),
  searchId: s.optional(s.string()),
  tee: s.optional(s.boolean()),
  flushMs: s.optional(s.float64()),
  suppressPreviews: s.optional(s.boolean()),
  mode: s.optional(s.lazy(() => mode77Schema)),
});
