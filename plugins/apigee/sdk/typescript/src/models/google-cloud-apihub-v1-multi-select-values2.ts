import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ConfigValueOptionSchema,
  type GoogleCloudApihubV1ConfigValueOption,
} from "./google-cloud-apihub-v1-config-value-option.js";

/** Optional. The config variable value in case of config variable of type multi select. */
export type GoogleCloudApihubV1MultiSelectValues2 = {
  /** Optional. The config variable value of data type multi select. */
  values?: GoogleCloudApihubV1ConfigValueOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MultiSelectValues2Schema: Schema<GoogleCloudApihubV1MultiSelectValues2> =
  s.object<GoogleCloudApihubV1MultiSelectValues2>(
    {
      values: s.optional(s.array(s.lazy(() => googleCloudApihubV1ConfigValueOptionSchema))),
    },
    { additionalProperties: s.json() },
  );
