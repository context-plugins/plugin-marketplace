import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { variablesSchema, type Variables } from "./unions/variables.js";

export type UpdateFeatureVariationDto = {
  /**
   * Unique key by Feature, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /** Variation display name. */
  name?: string;
  /** A key-value map of variables to their value for this variation */
  variables?: Record<string, Variables>;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateFeatureVariationDtoProperties: s.Shape<UpdateFeatureVariationDto> = {
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  variables: s.optional(
    s.record(
      s.string(),
      s.lazy(() => variablesSchema),
    ),
  ),
  id: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
};

export const updateFeatureVariationDtoInternalSchema: Schema<UpdateFeatureVariationDto> =
  s.object<UpdateFeatureVariationDto>(updateFeatureVariationDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateFeatureVariationDtoSchema: Schema<UpdateFeatureVariationDto> = s.lazySchema(() =>
  s.object<UpdateFeatureVariationDto>(
    {
      ...updateFeatureVariationDtoProperties,
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
