import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type User = {
  id: string;
  email: string;
  domain: string;
};

export const userSchema: Schema<User> = s.object<User>({
  id: s.string(),
  email: s.string(),
  domain: s.string(),
});
