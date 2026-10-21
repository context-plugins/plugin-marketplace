import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the authorization amount is expected to be modified in the future or not. */
export type IsAmountEstimated = boolean;

export const isAmountEstimatedSchema: Schema<IsAmountEstimated> = s.of<IsAmountEstimated>(
  s.union([s.boolean()]),
);
