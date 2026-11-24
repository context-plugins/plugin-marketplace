import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideFeeCollection = {
  /** @default "hide_fee_collection" */
  name?: "hide_fee_collection";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideFeeCollectionSchema: Schema<HideFeeCollection> = s.object<HideFeeCollection>(
  {
    name: s.defaulted(s.literal("hide_fee_collection"), "hide_fee_collection"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
