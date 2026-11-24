import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dependencyCheckSchema, type DependencyCheck } from "./dependency-check.js";

export type Checks = {
  database?: DependencyCheck;
  billing?: DependencyCheck;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checksSchema: Schema<Checks> = s.object<Checks>(
  {
    database: s.optional(s.lazy(() => dependencyCheckSchema)),
    billing: s.optional(s.lazy(() => dependencyCheckSchema)),
  },
  { additionalProperties: s.json() },
);
