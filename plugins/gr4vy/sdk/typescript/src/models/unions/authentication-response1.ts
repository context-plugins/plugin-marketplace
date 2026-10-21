import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AuthenticationResponse1 = string;

export const authenticationResponse1Schema: Schema<AuthenticationResponse1> = s.of<AuthenticationResponse1>(
  s.union([s.string()]),
);
