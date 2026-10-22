import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { outreachOverrideRulesSchema, type OutreachOverrideRules } from "../outreach-override-rules.js";

/**
 * Weekday- and date-specific outreach windows and daily maximums. The most specific rule wins:
 * date, then weekday, then the campaign defaults above. Omitted or null means the campaign defaults
 * apply to every active day.
 */
export type OutreachOverrideRules1 = OutreachOverrideRules;

export const outreachOverrideRules1Schema: Schema<OutreachOverrideRules1> = s.of<OutreachOverrideRules1>(
  s.union([s.lazy(() => outreachOverrideRulesSchema)]),
);
