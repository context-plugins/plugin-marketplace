import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { authToken2Schema, type AuthToken2 } from "../auth-token2.js";
import { authToken31Schema, type AuthToken31 } from "../auth-token31.js";

export type AuthToken3 = AuthToken2 | AuthToken31;

export const authToken3Schema: Schema<AuthToken3> = s.of<AuthToken3>(
  s.union([s.lazy(() => authToken2Schema), s.lazy(() => authToken31Schema)]),
);
