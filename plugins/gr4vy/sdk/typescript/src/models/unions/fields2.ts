import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { voidableFieldSchema, type VoidableField } from "../voidable-field.js";

/**
 * The non-secret credential fields that have been configured for this payment service. Any secret
 * fields are omitted.
 */
export type Fields2 = VoidableField[];

export const fields2Schema: Schema<Fields2> = s.of<Fields2>(
  s.union([s.array(s.lazy(() => voidableFieldSchema))]),
);
