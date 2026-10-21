import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The code indicating the result of the operation. */
export const Code = {
  RejectedIds: "rejected_ids",
  InvalidIds: "invalid_ids",
  InternalErrorIds: "internal_error_ids",
  NonExistingIds: "non_existing_ids",
  InvalidRelateToSelfId: "invalid_relate_to_self_id",
  AlreadyExistsIds: "already_exists_ids",
  RelationDoesNotExistIds: "relation_does_not_exist_ids",
  SuccessIds: "success_ids",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
