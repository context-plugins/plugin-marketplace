import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsAccessAllowedRepSchema,
  type AiConfigsAccessAllowedRep,
} from "./ai-configs-access-allowed-rep.js";
import { aiConfigsAccessDeniedSchema, type AiConfigsAccessDenied } from "./ai-configs-access-denied.js";

export type AiConfigsAccess = {
  denied: AiConfigsAccessDenied[];
  allowed: AiConfigsAccessAllowedRep[];
};

export const aiConfigsAccessSchema: Schema<AiConfigsAccess> = s.object<AiConfigsAccess>({
  denied: s.array(s.lazy(() => aiConfigsAccessDeniedSchema)),
  allowed: s.array(s.lazy(() => aiConfigsAccessAllowedRepSchema)),
});
