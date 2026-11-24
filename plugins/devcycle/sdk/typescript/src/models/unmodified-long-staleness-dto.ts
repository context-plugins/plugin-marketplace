import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnmodifiedLongStalenessDto = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unmodifiedLongStalenessDtoSchema: Schema<UnmodifiedLongStalenessDto> =
  s.object<UnmodifiedLongStalenessDto>(
    {
      enabled: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
