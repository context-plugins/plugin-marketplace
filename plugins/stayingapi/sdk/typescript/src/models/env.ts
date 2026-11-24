import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Key environment: live or sandbox (stay_test_). */
export const Env = {
  Live: "live",
  Sandbox: "sandbox",
} as const;
export type Env = (typeof Env)[keyof typeof Env] | (string & {});

export const envSchema: EnumSchema<Env> = s.enumOf<Env>(Env);
