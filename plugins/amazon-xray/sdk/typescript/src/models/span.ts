import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Span = {
  /** The span ID. */
  id?: string;
  /** The span document. */
  document?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spanSchema: Schema<Span> = s.object<Span>(
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
