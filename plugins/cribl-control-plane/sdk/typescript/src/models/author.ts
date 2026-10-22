import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Author of the Git commit, including email and display name. */
export type Author = {
  /** Email address of the commit author. */
  email: string;
  /** Display name of the commit author. */
  name: string;
};

export const authorSchema: Schema<Author> = s.object<Author>({
  email: s.string(),
  name: s.string(),
});
