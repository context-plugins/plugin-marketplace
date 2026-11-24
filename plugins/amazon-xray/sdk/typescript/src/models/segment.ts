import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Segment = {
  /** The segment's ID. */
  id?: string;
  /** The segment document. */
  document?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSchema: Schema<Segment> = s.object<Segment>(
  {
    id: s.optional(s.string()),
    document: s.optional(s.string()),
    _keysMap: {
      id: "Id",
      document: "Document",
    },
  },
  { additionalProperties: s.json() },
);
