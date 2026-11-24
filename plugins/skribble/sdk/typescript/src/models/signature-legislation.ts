import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Legislation under which the signatures are created. Required when `quality` is `QES` or
 * `AES_MINIMAL`.
 *
 * | Legislation | Description |
 * | --- | --- |
 * | **ZERTES** | QES according to Swiss law. This is the **default**. |
 * | **EIDAS** | QES according to EU law. |
 */
export const SignatureLegislation = {
  Zertes: "ZERTES",
  Eidas: "EIDAS",
} as const;
export type SignatureLegislation =
  | (typeof SignatureLegislation)[keyof typeof SignatureLegislation]
  | (string & {});

export const signatureLegislationSchema: EnumSchema<SignatureLegislation> =
  s.enumOf<SignatureLegislation>(SignatureLegislation);
