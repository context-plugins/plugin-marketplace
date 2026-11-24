import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpoRegistrarInfo = {
  /** Name of the registrar handling the issue */
  name?: string;
  /** Contact email for the registrar */
  email?: string;
  /** Contact person at the registrar */
  contactName?: string;
  /** Contact number for the registrar */
  contactNumber?: string;
  /** Registrar's website */
  website?: string;
  /** SEBI registration number of the registrar */
  registrar?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoRegistrarInfoSchema: Schema<IpoRegistrarInfo> = s.object<IpoRegistrarInfo>(
  {
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    contactName: s.optional(s.string()),
    contactNumber: s.optional(s.string()),
    website: s.optional(s.string()),
    registrar: s.optional(s.string()),
    _keysMap: {
      contactName: "contact_name",
      contactNumber: "contact_number",
    },
  },
  { additionalProperties: s.json() },
);
