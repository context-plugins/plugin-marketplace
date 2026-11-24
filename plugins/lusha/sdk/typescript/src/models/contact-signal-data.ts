import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSignalSchema, type ContactSignal } from "./contact-signal.js";

export type ContactSignalData = {
  personId?: string;
  companyChange?: ContactSignal[];
  promotion?: ContactSignal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSignalDataSchema: Schema<ContactSignalData> = s.object<ContactSignalData>(
  {
    personId: s.optional(s.string()),
    companyChange: s.optional(s.array(s.lazy(() => contactSignalSchema))),
    promotion: s.optional(s.array(s.lazy(() => contactSignalSchema))),
  },
  { additionalProperties: s.json() },
);
