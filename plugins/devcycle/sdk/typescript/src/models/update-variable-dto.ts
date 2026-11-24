import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDevCycleManagementVariablesApiSchema,
  type TypeDevCycleManagementVariablesApi,
} from "./type-dev-cycle-management-variables-api.js";
import {
  variableValidationEntitySchema,
  type VariableValidationEntity,
} from "./variable-validation-entity.js";

export type UpdateVariableDto = {
  /** Variable name */
  name?: string;
  /** A description of the Variable */
  description?: string;
  /**
   * Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID.
   * Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
  type?: TypeDevCycleManagementVariablesApi;
  /** Validation schema for variable values */
  validationSchema?: VariableValidationEntity;
  /** Boolean indicating if the variable is intended to be long-lived within a feature */
  persistent?: boolean;
  /** Tags to organize Variables on the dashboard */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateVariableDtoProperties: s.Shape<UpdateVariableDto> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  key: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeDevCycleManagementVariablesApiSchema)),
  validationSchema: s.optional(s.lazy(() => variableValidationEntitySchema)),
  persistent: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
};

export const updateVariableDtoInternalSchema: Schema<UpdateVariableDto> = s.object<UpdateVariableDto>(
  updateVariableDtoProperties,
  { additionalProperties: s.json() },
);

export const updateVariableDtoSchema: Schema<UpdateVariableDto> = s.lazySchema(() =>
  s.object<UpdateVariableDto>(
    {
      ...updateVariableDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
