import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Email = {
  /** The type of email, such as home, work, unknown etc */
  type: string;
  /** Email address */
  email: string;
};

export const emailSchema: Schema<Email> = s.object<Email>({
  type: s.string(),
  email: s.string(),
});
