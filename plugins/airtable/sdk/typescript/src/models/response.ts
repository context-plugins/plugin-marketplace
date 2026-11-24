import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recordModelSchema, type RecordModel } from "./record-model.js";

export type Response = {
  records?: RecordModel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    records: s.optional(s.array(s.lazy(() => recordModelSchema))),
  },
  { additionalProperties: s.json() },
);
