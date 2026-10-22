import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";

export type TeamEmail = {
  /** An email address */
  email?: string;
  /** @default Type1.Other */
  type?: Type1;
  /**
   * true iff the email was manually added by a user from within Glean (aka not from the original
   * data source)
   */
  isUserGenerated?: boolean;
};

export const teamEmailSchema: Schema<TeamEmail> = s.object<TeamEmail>({
  email: s.optional(s.string()),
  type: s.defaulted(type1Schema, Type1.Other),
  isUserGenerated: s.optional(s.boolean()),
});
