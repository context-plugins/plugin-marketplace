import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByokOwner = string;

export const byokOwnerSchema: Schema<ByokOwner> = s.of<ByokOwner>(s.union([s.string()]));
