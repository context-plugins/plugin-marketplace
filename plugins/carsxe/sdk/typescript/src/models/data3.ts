import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type Data3 = {
  job?: Record<string, unknown>;
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    job: s.optional(s.record(s.string(), s.unknown())),
    results: s.optional(s.array(s.lazy(() => resultSchema))),
  },
  { additionalProperties: s.json() },
);
