import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AllowedValueSchema,
  type GoogleCloudApihubV1AllowedValue,
} from "./google-cloud-apihub-v1-allowed-value.js";

/** The attribute values of data type enum. */
export type GoogleCloudApihubV1EnumAttributeValues = {
  /** Required. The attribute values in case attribute data type is enum. */
  values?: GoogleCloudApihubV1AllowedValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1EnumAttributeValuesSchema: Schema<GoogleCloudApihubV1EnumAttributeValues> =
  s.object<GoogleCloudApihubV1EnumAttributeValues>(
    {
      values: s.optional(s.array(s.lazy(() => googleCloudApihubV1AllowedValueSchema))),
    },
    { additionalProperties: s.json() },
  );
