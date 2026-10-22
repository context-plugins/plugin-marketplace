import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsAccessDeniedReasonSchema,
  type AiConfigsAccessDeniedReason,
} from "./ai-configs-access-denied-reason.js";

export type AiConfigsAccessDenied = {
  action: string;
  reason: AiConfigsAccessDeniedReason;
};

export const aiConfigsAccessDeniedSchema: Schema<AiConfigsAccessDenied> = s.object<AiConfigsAccessDenied>({
  action: s.string(),
  reason: aiConfigsAccessDeniedReasonSchema,
});
