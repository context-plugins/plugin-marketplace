import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nodeTypeSchema, type NodeType } from "./node-type.js";

export type AnalyticsIntentNodeSummary = {
  /** The name of the intent at the end of the requested path. */
  intentName?: string;
  /** The path. */
  intentPath?: string;
  /** The total number of sessions that follow the given path to the given intent. */
  intentCount?: number;
  /** The number of intents up to and including the requested path. */
  intentLevel?: number;
  /** Specifies whether the node is the end of a path (Exit) or not (Inner). */
  nodeType?: NodeType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentNodeSummarySchema: Schema<AnalyticsIntentNodeSummary> =
  s.object<AnalyticsIntentNodeSummary>(
    {
      intentName: s.optional(s.string()),
      intentPath: s.optional(s.string()),
      intentCount: s.optional(s.int()),
      intentLevel: s.optional(s.int()),
      nodeType: s.optional(s.lazy(() => nodeTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
