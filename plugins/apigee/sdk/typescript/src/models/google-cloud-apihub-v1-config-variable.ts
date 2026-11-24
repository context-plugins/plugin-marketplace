import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ConfigValueOption1Schema,
  type GoogleCloudApihubV1ConfigValueOption1,
} from "./google-cloud-apihub-v1-config-value-option1.js";
import {
  googleCloudApihubV1MultiIntValues2Schema,
  type GoogleCloudApihubV1MultiIntValues2,
} from "./google-cloud-apihub-v1-multi-int-values2.js";
import {
  googleCloudApihubV1MultiSelectValues2Schema,
  type GoogleCloudApihubV1MultiSelectValues2,
} from "./google-cloud-apihub-v1-multi-select-values2.js";
import {
  googleCloudApihubV1MultiStringValues2Schema,
  type GoogleCloudApihubV1MultiStringValues2,
} from "./google-cloud-apihub-v1-multi-string-values2.js";
import {
  googleCloudApihubV1Secret5Schema,
  type GoogleCloudApihubV1Secret5,
} from "./google-cloud-apihub-v1-secret5.js";

/**
 * ConfigVariable represents a additional configuration variable present in a PluginInstance Config
 * or AuthConfig, based on a ConfigVariableTemplate.
 */
export type GoogleCloudApihubV1ConfigVariable = {
  /** Optional. The config variable value in case of config variable of type integer. */
  intValue?: string;
  /** Optional. The config variable value in case of config variable of type multi string. */
  multiStringValues?: GoogleCloudApihubV1MultiStringValues2;
  /** Optional. The config variable value in case of config variable of type string. */
  stringValue?: string;
  /** Optional. The config variable value in case of config variable of type multi select. */
  multiSelectValues?: GoogleCloudApihubV1MultiSelectValues2;
  /** Optional. The config variable value in case of config variable of type boolean. */
  boolValue?: boolean;
  /** Optional. The config variable value in case of config variable of type secret. */
  secretValue?: GoogleCloudApihubV1Secret5;
  /** Optional. The config variable value in case of config variable of type multi integer. */
  multiIntValues?: GoogleCloudApihubV1MultiIntValues2;
  /** Output only. Key will be the id to uniquely identify the config variable. */
  key?: string;
  /** Optional. The config variable value in case of config variable of type enum. */
  enumValue?: GoogleCloudApihubV1ConfigValueOption1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigVariableSchema: Schema<GoogleCloudApihubV1ConfigVariable> =
  s.object<GoogleCloudApihubV1ConfigVariable>(
    {
      intValue: s.optional(s.string()),
      multiStringValues: s.optional(s.lazy(() => googleCloudApihubV1MultiStringValues2Schema)),
      stringValue: s.optional(s.string()),
      multiSelectValues: s.optional(s.lazy(() => googleCloudApihubV1MultiSelectValues2Schema)),
      boolValue: s.optional(s.boolean()),
      secretValue: s.optional(s.lazy(() => googleCloudApihubV1Secret5Schema)),
      multiIntValues: s.optional(s.lazy(() => googleCloudApihubV1MultiIntValues2Schema)),
      key: s.optional(s.string()),
      enumValue: s.optional(s.lazy(() => googleCloudApihubV1ConfigValueOption1Schema)),
    },
    { additionalProperties: s.json() },
  );
