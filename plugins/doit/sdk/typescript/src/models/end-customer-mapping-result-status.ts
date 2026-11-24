import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EndCustomerMappingResultStatus = {
  Mapped: "mapped",
  AlreadyMapped: "already_mapped",
  Remapped: "remapped",
} as const;
export type EndCustomerMappingResultStatus =
  | (typeof EndCustomerMappingResultStatus)[keyof typeof EndCustomerMappingResultStatus]
  | (string & {});

export const endCustomerMappingResultStatusSchema: EnumSchema<EndCustomerMappingResultStatus> =
  s.enumOf<EndCustomerMappingResultStatus>(EndCustomerMappingResultStatus);
