import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** CardType. */
export const CardType = {
  Physical: "PHYSICAL",
  VirtualMember: "VIRTUAL_MEMBER",
  VirtualVendor: "VIRTUAL_VENDOR",
  Virtual: "VIRTUAL",
} as const;
export type CardType = (typeof CardType)[keyof typeof CardType] | (string & {});

export const cardTypeSchema: EnumSchema<CardType> = s.enumOf<CardType>(CardType);
