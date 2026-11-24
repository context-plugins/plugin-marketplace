import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { envSchema, type Env } from "./env.js";

export type Key = {
  /** Key environment: live or sandbox (stay_test_). */
  env: Env;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keySchema: Schema<Key> = s.object<Key>(
  {
    env: envSchema,
  },
  { additionalProperties: s.json() },
);
