import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginTypeSchema, type LoginType } from "../login-type.js";

/**
 * The type of login to use for the user. If not provided, defaults to google for \@gmail.com email
 * addresses, and username and password otherwise.
 */
export type LoginType1 = LoginType;

export const loginType1Schema: Schema<LoginType1> = s.of<LoginType1>(
  s.union([s.lazy(() => loginTypeSchema)]),
);
