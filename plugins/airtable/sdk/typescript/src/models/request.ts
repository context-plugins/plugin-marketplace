import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { record1Schema, type Record1 } from "./record1.js";

export type Request = {
  records: Record1[];
  /** If true, the API will attempt to convert string values to the appropriate cell value type. */
  typecast?: boolean;
  /** If true, the response will use field IDs as keys instead of field names. */
  returnFieldsByFieldId?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const requestProperties: s.Shape<Request> = {
  records: s.array(s.lazy(() => record1Schema)),
  typecast: s.optional(s.boolean()),
  returnFieldsByFieldId: s.optional(s.boolean()),
};

export const requestInternalSchema: Schema<Request> = s.object<Request>(requestProperties, {
  additionalProperties: s.json(),
});

export const requestSchema: Schema<Request> = s.lazySchema(() =>
  s.object<Request>(
    {
      ...requestProperties,
      records: s.array(s.lazy(() => record1Schema)).check(s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
