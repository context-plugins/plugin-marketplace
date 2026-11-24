import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertySchemaSchema, type PropertySchema } from "./property-schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type CustomProperty = {
  /** Display name for Custom Property. */
  name: string;
  /**
   * Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD
   * operations. Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** A unique CustomProperty ID */
  id: string;
  /** The Project owning the Custom Property */
  project: string;
  /** ID of the User who created the project */
  createdBy: string;
  /**
   * Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the
   * Custom Property..
   */
  propertyKey: string;
  /** The Custom Property type */
  type: Type2;
  /** The date the Project was created */
  createdAt: Date;
  /** The date the Project was last updated */
  updatedAt: Date;
  /** Schema definition for the custom property. */
  schema?: PropertySchema;
  /** Whether the custom property is in use by a feature */
  hasUsage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customPropertyProperties: s.Shape<CustomProperty> = {
  name: s.string(),
  key: s.string(),
  id: s.string(),
  project: s.string(),
  createdBy: s.string(),
  propertyKey: s.string(),
  type: type2Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  schema: s.optional(s.lazy(() => propertySchemaSchema)),
  hasUsage: s.optional(s.boolean()),
  _keysMap: {
    id: "_id",
    project: "_project",
    createdBy: "_createdBy",
  },
};

export const customPropertyInternalSchema: Schema<CustomProperty> = s.object<CustomProperty>(
  customPropertyProperties,
  { additionalProperties: s.json() },
);

export const customPropertySchema: Schema<CustomProperty> = s.lazySchema(() =>
  s.object<CustomProperty>(
    {
      ...customPropertyProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
