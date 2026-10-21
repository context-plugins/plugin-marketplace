import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessAllowedReasonSchema, type AccessAllowedReason } from "./access-allowed-reason.js";

export type AccessAllowedRep = {
  action: string;
  reason: AccessAllowedReason;
};

export const accessAllowedRepSchema: Schema<AccessAllowedRep> = s.object<AccessAllowedRep>({
  action: s.string(),
  reason: accessAllowedReasonSchema,
});
