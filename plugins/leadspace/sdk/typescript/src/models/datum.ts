import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentCompanyInputSchema, type IntentCompanyInput } from "./intent-company-input.js";

export type Datum = {
  company?: IntentCompanyInput;
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    company: s.optional(s.lazy(() => intentCompanyInputSchema)),
    externalId: s.optional(s.string()),
    _keysMap: {
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
