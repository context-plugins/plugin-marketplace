import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";
import {
  variableValidationEntitySchema,
  type VariableValidationEntity,
} from "./variable-validation-entity.js";

export type CreateVariableDto = {
  /** Variable name */
  name?: string;
  /** A description of the Variable */
  description?: string;
  /**
   * Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID.
   * Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** The ID of the Feature this Variable belongs to */
  feature?: string;
  /** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
  type: Type4;
  /** Validation schema for variable values */
  validationSchema?: VariableValidationEntity;
  /** Feature tags. */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createVariableDtoProperties: s.Shape<CreateVariableDto> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  key: s.string(),
  feature: s.optional(s.string()),
  type: type4Schema,
  validationSchema: s.optional(s.lazy(() => variableValidationEntitySchema)),
  tags: s.optional(s.array(s.string())),
  _keysMap: {
    feature: "_feature",
  },
};

export const createVariableDtoInternalSchema: Schema<CreateVariableDto> = s.object<CreateVariableDto>(
  createVariableDtoProperties,
  { additionalProperties: s.json() },
);

export const createVariableDtoSchema: Schema<CreateVariableDto> = s.lazySchema(() =>
  s.object<CreateVariableDto>(
    {
      ...createVariableDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
