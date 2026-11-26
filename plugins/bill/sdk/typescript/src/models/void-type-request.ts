import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Void type request enum. */
export const VoidTypeRequest = {
  VoidAndCredit: "VOID_AND_CREDIT",
  VoidAndReissue: "VOID_AND_REISSUE",
} as const;
export type VoidTypeRequest = (typeof VoidTypeRequest)[keyof typeof VoidTypeRequest] | (string & {});

export const voidTypeRequestSchema: EnumSchema<VoidTypeRequest> = s.enumOf<VoidTypeRequest>(VoidTypeRequest);
