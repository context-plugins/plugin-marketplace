import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByAction = {
  actionId: string;
  changed: number;
  loosened: number;
  tightened: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byActionSchema: Schema<ByAction> = s.object<ByAction>(
  {
    actionId: s.string(),
    changed: s.int(),
    loosened: s.int(),
    tightened: s.int(),
  },
  { additionalProperties: s.json() },
);
