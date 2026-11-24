import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The typed confirmation a destructive (Tier C) operation requires. A mismatch is 409 and changes
 * nothing.
 */
export type ConfirmTarget = {
  /**
   * The exact target value this operation names in its description. A boolean true is rejected by
   * the strict schema, so a bare confirmation can never stand in for a typed one.
   */
  confirm: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmTargetSchema: Schema<ConfirmTarget> = s.object<ConfirmTarget>(
  {
    confirm: s.string(),
  },
  { additionalProperties: s.json() },
);
