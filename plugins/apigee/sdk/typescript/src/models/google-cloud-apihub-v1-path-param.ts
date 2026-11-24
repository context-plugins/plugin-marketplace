import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTypeSchema, type DataType } from "./data-type.js";

/** HTTP Path parameter. */
export type GoogleCloudApihubV1PathParam = {
  /** Optional. Data type of path param */
  dataType?: DataType;
  /** Optional. Segment location in the path, 1-indexed */
  position?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PathParamSchema: Schema<GoogleCloudApihubV1PathParam> =
  s.object<GoogleCloudApihubV1PathParam>(
    {
      dataType: s.optional(s.lazy(() => dataTypeSchema)),
      position: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
