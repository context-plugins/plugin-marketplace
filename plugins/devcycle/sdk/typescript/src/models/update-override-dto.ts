import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateOverrideDto = {
  environment: string;
  variation: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateOverrideDtoSchema: Schema<UpdateOverrideDto> = s.object<UpdateOverrideDto>(
  {
    environment: s.string(),
    variation: s.string(),
  },
  { additionalProperties: s.json() },
);
