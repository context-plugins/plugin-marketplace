import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record2Schema, type Record2 } from "./record2.js";

export type RecordsWithoutFields = {
  records: Record2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordsWithoutFieldsSchema: Schema<RecordsWithoutFields> = s.object<RecordsWithoutFields>(
  {
    records: s.array(s.lazy(() => record2Schema)),
  },
  { additionalProperties: s.json() },
);
