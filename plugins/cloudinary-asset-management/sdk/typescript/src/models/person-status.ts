import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a person. */
export const PersonStatus = {
  Active: "active",
  Hidden: "hidden",
} as const;
export type PersonStatus = (typeof PersonStatus)[keyof typeof PersonStatus] | (string & {});

export const personStatusSchema: EnumSchema<PersonStatus> = s.enumOf<PersonStatus>(PersonStatus);
