import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataType2Schema, type DataType2 } from "./data-type2.js";

/** An aggregation of HTTP header occurrences. */
export type GoogleCloudApihubV1Header = {
  /** Data type of header */
  dataType?: DataType2;
  /** The number of occurrences of this Header across transactions. */
  count?: string;
  /** Header name. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HeaderSchema: Schema<GoogleCloudApihubV1Header> =
  s.object<GoogleCloudApihubV1Header>(
    {
      dataType: s.optional(s.lazy(() => dataType2Schema)),
      count: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
