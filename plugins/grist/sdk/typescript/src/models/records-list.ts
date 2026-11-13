import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recordModelSchema, type RecordModel } from "./record-model.js";

export type RecordsList = {
  records: RecordModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordsListSchema: Schema<RecordsList> = s.object<RecordsList>(
  {
    records: s.array(s.lazy(() => recordModelSchema)),
  },
  { additionalProperties: s.json() },
);
