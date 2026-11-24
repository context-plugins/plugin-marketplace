import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Construct a type with a set of properties K of type T */
export type RecordDayBooleanOrUndefined = {
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordDayBooleanOrUndefinedSchema: Schema<RecordDayBooleanOrUndefined> =
  s.object<RecordDayBooleanOrUndefined>(
    {
      monday: s.optional(s.boolean()),
      tuesday: s.optional(s.boolean()),
      wednesday: s.optional(s.boolean()),
      thursday: s.optional(s.boolean()),
      friday: s.optional(s.boolean()),
      saturday: s.optional(s.boolean()),
      sunday: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
