import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InputHttpAuthTypeSecretConstraint = {
  /** Discriminator value. @default "secret" */
  authType?: "secret";
};

export const inputHttpAuthTypeSecretConstraintSchema: Schema<InputHttpAuthTypeSecretConstraint> =
  s.object<InputHttpAuthTypeSecretConstraint>({
    authType: s.defaulted(s.literal("secret"), "secret"),
  });
