import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertySchemaSchema, type PropertySchema } from "./property-schema.js";
import {
  typeDevCycleManagementCustomPropertiesApiSchema,
  type TypeDevCycleManagementCustomPropertiesApi,
} from "./type-dev-cycle-management-custom-properties-api.js";

export type UpdateCustomPropertyDto = {
  /** Display name for Custom Property. */
  name?: string;
  /**
   * Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD
   * operations. Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /**
   * Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the
   * Custom Property..
   */
  propertyKey?: string;
  /** Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String" */
  type?: TypeDevCycleManagementCustomPropertiesApi;
  /** Schema definition for the custom property. */
  schema?: PropertySchema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCustomPropertyDtoProperties: s.Shape<UpdateCustomPropertyDto> = {
  name: s.optional(s.string()),
  key: s.optional(s.string()),
  propertyKey: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeDevCycleManagementCustomPropertiesApiSchema)),
  schema: s.optional(s.lazy(() => propertySchemaSchema)),
};

export const updateCustomPropertyDtoInternalSchema: Schema<UpdateCustomPropertyDto> =
  s.object<UpdateCustomPropertyDto>(updateCustomPropertyDtoProperties, { additionalProperties: s.json() });

export const updateCustomPropertyDtoSchema: Schema<UpdateCustomPropertyDto> = s.lazySchema(() =>
  s.object<UpdateCustomPropertyDto>(
    {
      ...updateCustomPropertyDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
