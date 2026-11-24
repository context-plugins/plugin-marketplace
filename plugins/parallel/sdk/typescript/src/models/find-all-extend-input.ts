import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input model for FindAll extend. */
export type FindAllExtendInput = {
  /**
   * Additional number of matches to find for this FindAll run. This value will be added to the
   * current match limit to determine the new total match limit. Must be greater than 0.
   */
  additionalMatchLimit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllExtendInputSchema: Schema<FindAllExtendInput> = s.object<FindAllExtendInput>(
  {
    additionalMatchLimit: s.int(),
    _keysMap: {
      additionalMatchLimit: "additional_match_limit",
    },
  },
  { additionalProperties: s.json() },
);
