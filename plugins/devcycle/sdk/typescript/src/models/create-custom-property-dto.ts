import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertySchemaSchema, type PropertySchema } from "./property-schema.js";
import {
  typeDevCycleManagementCustomPropertiesApiSchema,
  type TypeDevCycleManagementCustomPropertiesApi,
} from "./type-dev-cycle-management-custom-properties-api.js";

export type CreateCustomPropertyDto = {
  /** Display name for Custom Property. */
  name: string;
  /**
   * Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD
   * operations. Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String" */
  type: TypeDevCycleManagementCustomPropertiesApi;
  /**
   * Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the
   * Custom Property..
   */
  propertyKey: string;
  /** Schema definition for the custom property. */
  schema?: PropertySchema;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomPropertyDtoProperties: s.Shape<CreateCustomPropertyDto> = {
  name: s.string(),
  key: s.string(),
  type: typeDevCycleManagementCustomPropertiesApiSchema,
  propertyKey: s.string(),
  schema: s.optional(s.lazy(() => propertySchemaSchema)),
};

export const createCustomPropertyDtoInternalSchema: Schema<CreateCustomPropertyDto> =
  s.object<CreateCustomPropertyDto>(createCustomPropertyDtoProperties, { additionalProperties: s.json() });

export const createCustomPropertyDtoSchema: Schema<CreateCustomPropertyDto> = s.lazySchema(() =>
  s.object<CreateCustomPropertyDto>(
    {
      ...createCustomPropertyDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
