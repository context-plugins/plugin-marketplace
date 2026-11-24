import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueCountContentDto = {
  count?: number;
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueCountContentDtoSchema: Schema<ValueCountContentDto> = s.object<ValueCountContentDto>(
  {
    count: s.optional(s.int()),
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
