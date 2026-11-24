import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OwnerName = string;

export const ownerNameSchema: Schema<OwnerName> = s.of<OwnerName>(s.union([s.string()]));
