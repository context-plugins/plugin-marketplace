import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsAccessAllowedReasonSchema,
  type AiConfigsAccessAllowedReason,
} from "./ai-configs-access-allowed-reason.js";

export type AiConfigsAccessAllowedRep = {
  action: string;
  reason: AiConfigsAccessAllowedReason;
};

export const aiConfigsAccessAllowedRepSchema: Schema<AiConfigsAccessAllowedRep> =
  s.object<AiConfigsAccessAllowedRep>({
    action: s.string(),
    reason: aiConfigsAccessAllowedReasonSchema,
  });
