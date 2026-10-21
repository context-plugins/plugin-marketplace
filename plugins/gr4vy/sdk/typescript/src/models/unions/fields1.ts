import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fieldSchema, type Field } from "../field.js";

/**
 * The non-secret credential fields that have been configured for this payment service. Any secret
 * fields are omitted.
 */
export type Fields1 = Field[];

export const fields1Schema: Schema<Fields1> = s.of<Fields1>(s.union([s.array(s.lazy(() => fieldSchema))]));
