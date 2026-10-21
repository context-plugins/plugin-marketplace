import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authMethodSchema, type AuthMethod } from "./auth-method.js";

/** A single step in multi-factor authentication flow */
export type AuthStep = {
  /** Order of the authentication step (1-3, must be unique across steps) */
  order: number;
  /**
   * List of allowed authentication methods for this step. User can choose any one method from this
   * list.
   */
  allowedMethods: AuthMethod[];
};

export const authStepSchema: Schema<AuthStep> = s.object<AuthStep>({
  order: s.int(),
  allowedMethods: s.array(s.lazy(() => authMethodSchema)),
});
