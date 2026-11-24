import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransfersRequest1 = {
  /** true to hold settlement; false to release. */
  onHold?: boolean;
  /**
   * Unix timestamp for automatic hold release. null = hold indefinitely until manually released.
   */
  onHoldUntil?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transfersRequest1Schema: Schema<TransfersRequest1> = s.object<TransfersRequest1>(
  {
    onHold: s.optional(s.boolean()),
    onHoldUntil: s.optional(s.int()),
    _keysMap: {
      onHold: "on_hold",
      onHoldUntil: "on_hold_until",
    },
  },
  { additionalProperties: s.json() },
);
