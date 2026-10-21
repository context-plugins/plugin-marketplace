import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { recipientSchema, type Recipient } from "../recipient.js";

/** The recipient of any account to account funding. For use with AFTs. */
export type Recipient1 = Recipient;

export const recipient1Schema: Schema<Recipient1> = s.of<Recipient1>(
  s.union([s.lazy(() => recipientSchema)]),
);
