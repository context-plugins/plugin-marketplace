import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";

export type SignatureZone = {
  page?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  /** @default Type1.Signature */
  type?: Type1;
  /** Instruction shown to the signer for text/checkbox fields */
  label?: string | null;
  /** Whether a text/checkbox field must be filled before the signer can sign @default true */
  required?: boolean;
  /**
   * Value entered by the signer (text/checkbox) or auto-filled date. Populated only once the sign
   * request is signed.
   */
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureZoneSchema: Schema<SignatureZone> = s.object<SignatureZone>(
  {
    page: s.optional(s.int()),
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
    width: s.optional(s.float64()),
    height: s.optional(s.float64()),
    type: s.defaulted(type1Schema, Type1.Signature),
    label: s.optionalNullable(s.string()),
    required: s.defaulted(s.boolean(), true),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
