import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type ForceFeeCollection = {
  /** @default "force_fee_collection" */
  name?: "force_fee_collection";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forceFeeCollectionSchema: Schema<ForceFeeCollection> = s.object<ForceFeeCollection>(
  {
    name: s.defaulted(s.literal("force_fee_collection"), "force_fee_collection"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
