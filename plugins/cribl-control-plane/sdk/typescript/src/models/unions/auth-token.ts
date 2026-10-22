import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  inputHttpAuthTokensExtItemsTypeSchema,
  type InputHttpAuthTokensExtItemsType,
} from "../input-http-auth-tokens-ext-items-type.js";
import {
  inputHttpAuthTypeSecretConstraintSchema,
  type InputHttpAuthTypeSecretConstraint,
} from "../input-http-auth-type-secret-constraint.js";

export type AuthToken = InputHttpAuthTokensExtItemsType | InputHttpAuthTypeSecretConstraint;

export const authTokenSchema: Schema<AuthToken> = s.of<AuthToken>(
  s.union([
    s.lazy(() => inputHttpAuthTokensExtItemsTypeSchema),
    s.lazy(() => inputHttpAuthTypeSecretConstraintSchema),
  ]),
);
