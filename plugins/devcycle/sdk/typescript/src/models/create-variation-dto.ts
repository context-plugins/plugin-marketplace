import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { variablesSchema, type Variables } from "./unions/variables.js";

export type CreateVariationDto = {
  /**
   * Unique key by Feature, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Variation display name. */
  name: string;
  /** A key-value map of variables to their value for this variation */
  variables?: Record<string, Variables>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createVariationDtoProperties: s.Shape<CreateVariationDto> = {
  key: s.string(),
  name: s.string(),
  variables: s.optional(
    s.record(
      s.string(),
      s.lazy(() => variablesSchema),
    ),
  ),
};

export const createVariationDtoInternalSchema: Schema<CreateVariationDto> = s.object<CreateVariationDto>(
  createVariationDtoProperties,
  { additionalProperties: s.json() },
);

export const createVariationDtoSchema: Schema<CreateVariationDto> = s.lazySchema(() =>
  s.object<CreateVariationDto>(
    {
      ...createVariationDtoProperties,
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      name: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
