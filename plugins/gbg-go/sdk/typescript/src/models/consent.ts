import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Consent = {
  type?: Type1;
  id?: string;
  version?: string;
  url: string;
  effectiveDate?: string;
  expiryDate?: string;
  terms?: string;
  purpose?: string;
  legalBasis?: string;
  jurisdiction?: string;
  subject?: string;
  signatory?: string;
};

export const consentSchema: Schema<Consent> = s.object<Consent>({
  type: s.optional(s.lazy(() => type1Schema)),
  id: s.optional(s.string()),
  version: s.optional(s.string()),
  url: s.string(),
  effectiveDate: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  terms: s.optional(s.string()),
  purpose: s.optional(s.string()),
  legalBasis: s.optional(s.string()),
  jurisdiction: s.optional(s.string()),
  subject: s.optional(s.string()),
  signatory: s.optional(s.string()),
});
