import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateStalenessDto = {
  snoozedUntil?: string;
  disabled?: boolean;
  metaData?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStalenessDtoSchema: Schema<UpdateStalenessDto> = s.object<UpdateStalenessDto>(
  {
    snoozedUntil: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    metaData: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
