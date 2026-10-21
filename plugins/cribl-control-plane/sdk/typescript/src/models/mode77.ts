import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * In Sender mode, forwards search results directly to the destination. In Metrics mode, accumulates
 * metrics from federated send operators, and forwards the aggregate metrics.
 */
export const Mode77 = {
  Sender: "sender",
  Metrics: "metrics",
} as const;
export type Mode77 = (typeof Mode77)[keyof typeof Mode77] | (string & {});

export const mode77Schema: EnumSchema<Mode77> = s.enumOf<Mode77>(Mode77);
