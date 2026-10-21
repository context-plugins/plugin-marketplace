import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { authToken2Schema, type AuthToken2 } from "../auth-token2.js";
import {
  inputHttpAuthTypeSecretConstraintSchema,
  type InputHttpAuthTypeSecretConstraint,
} from "../input-http-auth-type-secret-constraint.js";

export type AuthToken211 = AuthToken2 | InputHttpAuthTypeSecretConstraint;

export const authToken211Schema: Schema<AuthToken211> = s.of<AuthToken211>(
  s.union([s.lazy(() => authToken2Schema), s.lazy(() => inputHttpAuthTypeSecretConstraintSchema)]),
);
