import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopBuildInput = {
  /** The ID of the build. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBuildInputSchema: Schema<StopBuildInput> = s.object<StopBuildInput>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
