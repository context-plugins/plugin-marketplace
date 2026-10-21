import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User = {
  href: string;
  sourcedId: string;
  type: string;
};

export const userSchema: Schema<User> = s.object<User>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
