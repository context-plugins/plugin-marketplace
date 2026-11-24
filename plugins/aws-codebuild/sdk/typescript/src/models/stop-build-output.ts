import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSchema, type Build } from "./build.js";

export type StopBuildOutput = {
  build?: Build;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBuildOutputSchema: Schema<StopBuildOutput> = s.object<StopBuildOutput>(
  {
    build: s.optional(s.lazy(() => buildSchema)),
  },
  { additionalProperties: s.json() },
);
