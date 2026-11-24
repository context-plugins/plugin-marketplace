import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the introspection during retrieval. By default, when a new instrospection is being
 * retrieved, the status will be set to PROCESSING. Once the operation has been completed, the
 * status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED operation
 * will return an error and its details as an introspectionStatusDetail.
 */
export const IntrospectionStatus = {
  Processing: "PROCESSING",
  Failed: "FAILED",
  Success: "SUCCESS",
} as const;
export type IntrospectionStatus =
  | (typeof IntrospectionStatus)[keyof typeof IntrospectionStatus]
  | (string & {});

export const introspectionStatusSchema: EnumSchema<IntrospectionStatus> =
  s.enumOf<IntrospectionStatus>(IntrospectionStatus);
