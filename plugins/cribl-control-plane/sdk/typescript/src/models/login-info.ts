import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoginInfo = {
  /** Password for the account. */
  password: string;
  /** Username of the account to authenticate. */
  username: string;
};

export const loginInfoSchema: Schema<LoginInfo> = s.object<LoginInfo>({
  password: s.string(),
  username: s.string(),
});
