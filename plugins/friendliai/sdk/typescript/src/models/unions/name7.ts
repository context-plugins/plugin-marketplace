import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Specifies the name of your endpoint. If not provided, a name will be automatically generated for
 * you.
 */
export type Name7 = string;

export const name7Schema: Schema<Name7> = s.of<Name7>(s.union([s.string()]));
