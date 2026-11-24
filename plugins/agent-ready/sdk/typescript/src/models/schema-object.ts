import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** Schema.org JSON-LD for a result. */
export type SchemaObject = {
  /** @default "https://schema.org" */
  context?: "https://schema.org";
  type: Type;
  name: string;
  url: string;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaObjectSchema: Schema<SchemaObject> = s.object<SchemaObject>(
  {
    context: s.defaulted(s.literal("https://schema.org"), "https://schema.org"),
    type: typeSchema,
    name: s.string(),
    url: s.string(),
    description: s.optional(s.string()),
    _keysMap: {
      context: "@context",
      type: "@type",
    },
  },
  { additionalProperties: s.json() },
);
