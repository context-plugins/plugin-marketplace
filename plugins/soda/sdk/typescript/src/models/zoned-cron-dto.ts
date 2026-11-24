import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ZonedCronDto = {
  cronExpression: string;
  timezone: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const zonedCronDtoSchema: Schema<ZonedCronDto> = s.object<ZonedCronDto>(
  {
    cronExpression: s.string(),
    timezone: s.string(),
  },
  { additionalProperties: s.json() },
);
