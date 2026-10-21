import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigsAccessAllowedRepSchema,
  type AiConfigsAccessAllowedRep,
} from "./ai-configs-access-allowed-rep.js";
import { aiConfigsAccessDeniedSchema, type AiConfigsAccessDenied } from "./ai-configs-access-denied.js";

export type AccessRep = {
  denied: AiConfigsAccessDenied[];
  allowed: AiConfigsAccessAllowedRep[];
};

export const accessRepSchema: Schema<AccessRep> = s.object<AccessRep>({
  denied: s.array(s.lazy(() => aiConfigsAccessDeniedSchema)),
  allowed: s.array(s.lazy(() => aiConfigsAccessAllowedRepSchema)),
});
