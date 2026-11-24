import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResultSchema, type BatchResult } from "./batch-result.js";
import { kindSchema, type Kind } from "./kind.js";

export type Data = {
  kind?: Kind;
  results?: BatchResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    kind: s.optional(s.lazy(() => kindSchema)),
    results: s.optional(s.array(s.lazy(() => batchResultSchema))),
  },
  { additionalProperties: s.json() },
);
