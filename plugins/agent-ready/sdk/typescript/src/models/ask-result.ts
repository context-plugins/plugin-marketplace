import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schemaObjectSchema, type SchemaObject } from "./schema-object.js";

/** An NLWeb result object. */
export type AskResult = {
  url: string;
  name: string;
  site: string;
  /** Relevance score (BM25). */
  score: number;
  description: string;
  /** Schema.org JSON-LD for a result. */
  schemaObject: SchemaObject;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const askResultSchema: Schema<AskResult> = s.object<AskResult>(
  {
    url: s.string(),
    name: s.string(),
    site: s.string(),
    score: s.float64(),
    description: s.string(),
    schemaObject: schemaObjectSchema,
    _keysMap: {
      schemaObject: "schema_object",
    },
  },
  { additionalProperties: s.json() },
);
