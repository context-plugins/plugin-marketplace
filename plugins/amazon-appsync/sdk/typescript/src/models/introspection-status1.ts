import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the introspection during creation. By default, when a new instrospection has been
 * created, the status will be set to PROCESSING. Once the operation has been completed, the status
 * will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED operation will
 * return an error and its details as an introspectionStatusDetail.
 */
export const IntrospectionStatus1 = {
  Processing: "PROCESSING",
  Failed: "FAILED",
  Success: "SUCCESS",
} as const;
export type IntrospectionStatus1 =
  | (typeof IntrospectionStatus1)[keyof typeof IntrospectionStatus1]
  | (string & {});

export const introspectionStatus1Schema: EnumSchema<IntrospectionStatus1> =
  s.enumOf<IntrospectionStatus1>(IntrospectionStatus1);
