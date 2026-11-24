import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntitlementResultDto = {
  class?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitlementResultDtoSchema: Schema<EntitlementResultDto> = s.object<EntitlementResultDto>(
  {
    class: s.optional(s.string()),
    _keysMap: {
      class: "@class",
    },
  },
  { additionalProperties: s.json() },
);
