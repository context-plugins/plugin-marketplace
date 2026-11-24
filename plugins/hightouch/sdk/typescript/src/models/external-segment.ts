import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The user facing ID for any created lists or audiences in the sync destination */
export type ExternalSegment = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalSegmentSchema: Schema<ExternalSegment> = s.object<ExternalSegment>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
