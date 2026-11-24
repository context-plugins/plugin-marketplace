import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classification1Schema, type Classification1 } from "./classification1.js";

/** Input for creating a runtime environment. */
export type EnvironmentInput = {
  /** Display name for the environment. */
  name: string;
  /** Whether this is a production or test environment. */
  classification: Classification1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentInputSchema: Schema<EnvironmentInput> = s.object<EnvironmentInput>(
  {
    name: s.string(),
    classification: classification1Schema,
  },
  { additionalProperties: s.json() },
);
