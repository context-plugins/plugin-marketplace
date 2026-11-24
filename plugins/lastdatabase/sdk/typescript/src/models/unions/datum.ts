import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { emailLeadSchema, type EmailLead } from "../email-lead.js";
import { faxLeadSchema, type FaxLead } from "../fax-lead.js";
import { phoneLeadSchema, type PhoneLead } from "../phone-lead.js";

export type Datum = EmailLead | PhoneLead | FaxLead;

export const datumSchema: Schema<Datum> = s.of<Datum>(
  s.union([s.lazy(() => emailLeadSchema), s.lazy(() => phoneLeadSchema), s.lazy(() => faxLeadSchema)]),
);
