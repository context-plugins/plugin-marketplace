import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Unmetered storage capacity for an unlimited team. */
export type UnlimitedDataFileStorageLimits = {
  /** @default "unlimited" */
  kind?: "unlimited";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unlimitedDataFileStorageLimitsSchema: Schema<UnlimitedDataFileStorageLimits> =
  s.object<UnlimitedDataFileStorageLimits>(
    {
      kind: s.defaulted(s.literal("unlimited"), "unlimited"),
    },
    { additionalProperties: s.json() },
  );
