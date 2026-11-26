import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AnomalyReason = string;

export const anomalyReasonSchema: Schema<AnomalyReason> = s.of<AnomalyReason>(s.union([s.string()]));
