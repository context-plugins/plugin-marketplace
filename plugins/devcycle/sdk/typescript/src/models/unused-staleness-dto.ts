import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnusedStalenessDto = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unusedStalenessDtoSchema: Schema<UnusedStalenessDto> = s.object<UnusedStalenessDto>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
