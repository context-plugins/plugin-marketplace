import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A string that identifies the payment as part of a group. */
export type TransferGroup = string;

export const transferGroupSchema: Schema<TransferGroup> = s.of<TransferGroup>(s.union([s.string()]));
