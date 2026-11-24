import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTypeSchema, type DataType } from "./data-type.js";

/** An aggregation of HTTP query parameter occurrences. */
export type GoogleCloudApihubV1QueryParam = {
  /** Required. Name of query param */
  name?: string;
  /** Optional. Data type of path param */
  dataType?: DataType;
  /** Optional. The number of occurrences of this query parameter across transactions. */
  count?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1QueryParamSchema: Schema<GoogleCloudApihubV1QueryParam> =
  s.object<GoogleCloudApihubV1QueryParam>(
    {
      name: s.optional(s.string()),
      dataType: s.optional(s.lazy(() => dataTypeSchema)),
      count: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
