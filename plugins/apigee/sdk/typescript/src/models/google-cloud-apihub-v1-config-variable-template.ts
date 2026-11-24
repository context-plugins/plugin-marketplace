import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1ConfigValueOptionSchema,
  type GoogleCloudApihubV1ConfigValueOption,
} from "./google-cloud-apihub-v1-config-value-option.js";
import { valueTypeSchema, type ValueType } from "./value-type.js";

/**
 * ConfigVariableTemplate represents a configuration variable template present in a Plugin Config.
 */
export type GoogleCloudApihubV1ConfigVariableTemplate = {
  /** Optional. Flag represents that this `ConfigVariable` must be provided for a PluginInstance. */
  required?: boolean;
  /** Optional. Description. */
  description?: string;
  /** Optional. Enum options. To be populated if `ValueType` is `ENUM`. */
  enumOptions?: GoogleCloudApihubV1ConfigValueOption[];
  /** Required. ID of the config variable. Must be unique within the configuration. */
  id?: string;
  /** Optional. Multi select options. To be populated if `ValueType` is `MULTI_SELECT`. */
  multiSelectOptions?: GoogleCloudApihubV1ConfigValueOption[];
  /**
   * Optional. Regular expression in RE2 syntax used for validating the `value` of a
   * `ConfigVariable`.
   */
  validationRegex?: string;
  /** Required. Type of the parameter: string, int, bool etc. */
  valueType?: ValueType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ConfigVariableTemplateSchema: Schema<GoogleCloudApihubV1ConfigVariableTemplate> =
  s.object<GoogleCloudApihubV1ConfigVariableTemplate>(
    {
      required: s.optional(s.boolean()),
      description: s.optional(s.string()),
      enumOptions: s.optional(s.array(s.lazy(() => googleCloudApihubV1ConfigValueOptionSchema))),
      id: s.optional(s.string()),
      multiSelectOptions: s.optional(s.array(s.lazy(() => googleCloudApihubV1ConfigValueOptionSchema))),
      validationRegex: s.optional(s.string()),
      valueType: s.optional(s.lazy(() => valueTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
