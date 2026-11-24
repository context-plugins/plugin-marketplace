import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  BundleSchemaInvalid: "bundle_schema_invalid",
  BundleVersionUnsupported: "bundle_version_unsupported",
  BundleLimitsExceeded: "bundle_limits_exceeded",
  BindingNotFound: "binding_not_found",
  BindingProviderMismatch: "binding_provider_mismatch",
  TableSchemaIncompatible: "table_schema_incompatible",
  GlobalVariableTypeConflict: "global_variable_type_conflict",
  InternalFieldRejected: "internal_field_rejected",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
