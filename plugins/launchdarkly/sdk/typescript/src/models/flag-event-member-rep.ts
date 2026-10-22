import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagEventMemberRep = {
  /** The member ID */
  id: string;
  /** The member email */
  email: string;
  /** The member first name */
  firstName: string;
  /** The member last name */
  lastName: string;
};

export const flagEventMemberRepSchema: Schema<FlagEventMemberRep> = s.object<FlagEventMemberRep>({
  id: s.string(),
  email: s.string(),
  firstName: s.string(),
  lastName: s.string(),
});
