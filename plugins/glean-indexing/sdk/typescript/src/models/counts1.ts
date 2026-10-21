import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Counts1 = {
  /** The number of users/groups/memberships uploaded */
  uploaded?: number;
};

export const counts1Schema: Schema<Counts1> = s.object<Counts1>({
  uploaded: s.optional(s.int()),
});
