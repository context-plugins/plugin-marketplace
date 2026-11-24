import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueTypeSchema, type ValueType } from "./value-type.js";

/** A shared asset storing a value accessible to automation processes */
export type Asset = {
  /** Unique integer identifier of the asset */
  id?: number;
  /** Display name of the asset */
  name?: string;
  /** Data type of the asset value */
  valueType?: ValueType;
  /** Value when ValueType is Text */
  stringValue?: string;
  /** Value when ValueType is Integer */
  intValue?: number;
  /** Value when ValueType is Bool */
  boolValue?: boolean;
  /** Username portion when ValueType is Credential */
  credentialUsername?: string;
  /** Password portion when ValueType is Credential (write-only) */
  credentialPassword?: string;
  /** Optional description of the asset's purpose */
  description?: string;
  /** ID of the folder in which this asset resides */
  organizationUnitId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetSchema: Schema<Asset> = s.object<Asset>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    valueType: s.optional(s.lazy(() => valueTypeSchema)),
    stringValue: s.optional(s.string()),
    intValue: s.optional(s.int()),
    boolValue: s.optional(s.boolean()),
    credentialUsername: s.optional(s.string()),
    credentialPassword: s.optional(s.string()),
    description: s.optional(s.string()),
    organizationUnitId: s.optional(s.int()),
    _keysMap: {
      id: "Id",
      name: "Name",
      valueType: "ValueType",
      stringValue: "StringValue",
      intValue: "IntValue",
      boolValue: "BoolValue",
      credentialUsername: "CredentialUsername",
      credentialPassword: "CredentialPassword",
      description: "Description",
      organizationUnitId: "OrganizationUnitId",
    },
  },
  { additionalProperties: s.json() },
);
