import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formfieldPositionSchema, type FormfieldPosition } from "./formfield-position.js";

export type SignatureFormfield = {
  /** Signature Formfield name */
  name?: string;
  /** Signature status of Formfield @default false */
  signed?: boolean;
  /** List of positions where the Formfield is present */
  positions?: FormfieldPosition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureFormfieldSchema: Schema<SignatureFormfield> = s.object<SignatureFormfield>(
  {
    name: s.optional(s.string()),
    signed: s.defaulted(s.boolean(), false),
    positions: s.optional(s.array(s.lazy(() => formfieldPositionSchema))),
  },
  { additionalProperties: s.json() },
);
