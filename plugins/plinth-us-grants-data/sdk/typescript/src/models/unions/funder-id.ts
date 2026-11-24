import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FunderId = string;

export const funderIdSchema: Schema<FunderId> = s.of<FunderId>(s.union([s.string()]));
