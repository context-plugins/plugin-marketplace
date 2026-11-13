import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record1Schema, type Record1 } from "./record1.js";

export type RecordsWithoutId = {
  records: Record1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordsWithoutIdSchema: Schema<RecordsWithoutId> = s.object<RecordsWithoutId>(
  {
    records: s.array(s.lazy(() => record1Schema)),
  },
  { additionalProperties: s.json() },
);
