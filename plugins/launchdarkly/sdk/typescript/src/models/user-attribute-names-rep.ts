import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAttributeNamesRep = {
  /** private attributes */
  private?: string[];
  /** custom attributes */
  custom?: string[];
  /** standard attributes */
  standard?: string[];
};

export const userAttributeNamesRepSchema: Schema<UserAttributeNamesRep> = s.object<UserAttributeNamesRep>({
  private: s.optional(s.array(s.string())),
  custom: s.optional(s.array(s.string())),
  standard: s.optional(s.array(s.string())),
});
