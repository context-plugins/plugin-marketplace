import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the mode in which the specific classifier was trained. This also indicates the format
 * of input documents and the format of the confusion matrix. Each classifier can only be trained in
 * one mode and this cannot be changed once the classifier is trained.
 */
export const Mode2 = {
  MultiClass: "MULTI_CLASS",
  MultiLabel: "MULTI_LABEL",
} as const;
export type Mode2 = (typeof Mode2)[keyof typeof Mode2] | (string & {});

export const mode2Schema: EnumSchema<Mode2> = s.enumOf<Mode2>(Mode2);
