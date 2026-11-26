import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentsCount = {
  /** Maximum number of production environments */
  production?: number;
  /** Maximum number of sandbox environments */
  sandbox?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentsCountSchema: Schema<EnvironmentsCount> = s.object<EnvironmentsCount>(
  {
    production: s.optional(s.int()),
    sandbox: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
