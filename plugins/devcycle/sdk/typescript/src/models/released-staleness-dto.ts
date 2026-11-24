import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReleasedStalenessDto = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const releasedStalenessDtoSchema: Schema<ReleasedStalenessDto> = s.object<ReleasedStalenessDto>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
