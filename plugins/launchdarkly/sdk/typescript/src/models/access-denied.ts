import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessDeniedReasonSchema, type AccessDeniedReason } from "./access-denied-reason.js";

export type AccessDenied = {
  action: string;
  reason: AccessDeniedReason;
};

export const accessDeniedSchema: Schema<AccessDenied> = s.object<AccessDenied>({
  action: s.string(),
  reason: accessDeniedReasonSchema,
});
