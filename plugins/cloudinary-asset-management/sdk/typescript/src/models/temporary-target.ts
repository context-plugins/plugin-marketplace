import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Store the output as a short-lived asset on the upload service. */
export type TemporaryTarget = {
  /** Discriminator identifying this as a temporary target. @default "temporary" */
  targetType?: "temporary";
};

export const temporaryTargetSchema: Schema<TemporaryTarget> = s.object<TemporaryTarget>({
  targetType: s.defaulted(s.literal("temporary"), "temporary"),
  _keysMap: {
    targetType: "target_type",
  },
});
