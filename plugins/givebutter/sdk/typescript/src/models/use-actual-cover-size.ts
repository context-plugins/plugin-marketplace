import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type UseActualCoverSize = {
  /** @default "use_actual_cover_size" */
  name?: "use_actual_cover_size";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const useActualCoverSizeSchema: Schema<UseActualCoverSize> = s.object<UseActualCoverSize>(
  {
    name: s.defaulted(s.literal("use_actual_cover_size"), "use_actual_cover_size"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
