import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxIdKind2Schema, type TaxIdKind2 } from "./tax-id-kind2.js";

export type TaxId = {
  /** The tax ID for the buyer. */
  value: string;
  /** The kind of tax ID */
  kind: TaxIdKind2;
};

export const taxIdSchema: Schema<TaxId> = s.object<TaxId>({
  value: s.string(),
  kind: taxIdKind2Schema,
});
