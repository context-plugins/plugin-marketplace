import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { variablesSchema, type Variables } from "./unions/variables.js";

export type UpdateVariationDto = {
  /**
   * Unique key by Feature, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Variation display name. */
  name: string;
  /** A key-value map of variables to their value for this variation */
  variables?: Record<string, Variables>;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateVariationDtoProperties: s.Shape<UpdateVariationDto> = {
  key: s.string(),
  name: s.string(),
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

export const updateVariationDtoInternalSchema: Schema<UpdateVariationDto> = s.object<UpdateVariationDto>(
  updateVariationDtoProperties,
  { additionalProperties: s.json() },
);

export const updateVariationDtoSchema: Schema<UpdateVariationDto> = s.lazySchema(() =>
  s.object<UpdateVariationDto>(
    {
      ...updateVariationDtoProperties,
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      name: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
