import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactSignal = {
  personId?: string;
  currentCompanyId?: number;
  currentCompanyName?: string;
  currentDepartments?: string;
  currentSeniorityLabel?: string;
  currentTitle?: string;
  signalDate?: string;
  previousCompanyName?: string;
  previousDomain?: string;
  currentDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSignalSchema: Schema<ContactSignal> = s.object<ContactSignal>(
  {
    personId: s.optional(s.string()),
    currentCompanyId: s.optional(s.int()),
    currentCompanyName: s.optional(s.string()),
    currentDepartments: s.optional(s.string()),
    currentSeniorityLabel: s.optional(s.string()),
    currentTitle: s.optional(s.string()),
    signalDate: s.optional(s.dateOnly()),
    previousCompanyName: s.optional(s.string()),
    previousDomain: s.optional(s.string()),
    currentDomain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
