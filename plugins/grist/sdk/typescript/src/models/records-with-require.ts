import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record3Schema, type Record3 } from "./record3.js";

export type RecordsWithRequire = {
  records: Record3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordsWithRequireSchema: Schema<RecordsWithRequire> = s.object<RecordsWithRequire>(
  {
    records: s.array(s.lazy(() => record3Schema)),
  },
  { additionalProperties: s.json() },
);
