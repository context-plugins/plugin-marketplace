import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceTypeSchema, type SourceType } from "./source-type.js";

/** The news source that published this article */
export type Source = {
  /** Unique source identifier */
  id?: string;
  name?: string;
  domain?: string;
  sourceType?: SourceType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
    sourceType: s.optional(s.lazy(() => sourceTypeSchema)),
    _keysMap: {
      sourceType: "source_type",
    },
  },
  { additionalProperties: s.json() },
);
