import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Visual query, used by audience */
export type Visual = {
  secondaryLabel?: string;
  primaryLabel?: string;
  filter: Record<string, unknown>;
  /** Parent id of the schema that visual query is based on */
  parentId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visualSchema: Schema<Visual> = s.object<Visual>(
  {
    secondaryLabel: s.optional(s.string()),
    primaryLabel: s.optional(s.string()),
    filter: s.record(s.string(), s.unknown()),
    parentId: s.float64(),
  },
  { additionalProperties: s.json() },
);
