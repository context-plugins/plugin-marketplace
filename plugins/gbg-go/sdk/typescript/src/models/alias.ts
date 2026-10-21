import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Alias = {
  /** Title of an individual such as Mr, Mrs, Dr, Sir */
  title?: string;
  /** A person's name used by their collegues and friends to address them */
  firstName?: string;
  /** Any other registered names used by the individual, not aliases */
  middleNames?: string[];
  /** Any family names for the individual */
  lastNames?: string[];
  /** Any family names for the individual */
  lastNamesAtBirth?: string[];
};

export const aliasSchema: Schema<Alias> = s.object<Alias>({
  title: s.optional(s.string()),
  firstName: s.optional(s.string()),
  middleNames: s.optional(s.array(s.string())),
  lastNames: s.optional(s.array(s.string())),
  lastNamesAtBirth: s.optional(s.array(s.string())),
});
