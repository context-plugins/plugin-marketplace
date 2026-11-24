import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DependencyFailedException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dependencyFailedExceptionSchema: Schema<DependencyFailedException> =
  s.object<DependencyFailedException>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
