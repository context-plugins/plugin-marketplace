import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressInputSchema, type AddressInput } from "./address-input.js";

export type CompanyInput = {
  /** Leadspace company identifier; when supplied it is matched on first */
  lsid?: string;
  /** Universal Graph company identifier */
  ugLsid?: string;
  name?: string;
  website?: string;
  companyLinkedinUrl?: string;
  address?: AddressInput;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyInputSchema: Schema<CompanyInput> = s.object<CompanyInput>(
  {
    lsid: s.optional(s.string()),
    ugLsid: s.optional(s.string()),
    name: s.optional(s.string()),
    website: s.optional(s.string()),
    companyLinkedinUrl: s.optional(s.string()),
    address: s.optional(s.lazy(() => addressInputSchema)),
  },
  { additionalProperties: s.json() },
);
