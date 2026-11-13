import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Detailed change information (when requested) */
export type Details = {
  /** Changes in the left document relative to common ancestor */
  leftChanges?: Record<string, unknown>;
  /** Changes in the right document relative to common ancestor */
  rightChanges?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailsSchema: Schema<Details> = s.object<Details>(
  {
    leftChanges: s.optional(s.record(s.string(), s.unknown())),
    rightChanges: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
