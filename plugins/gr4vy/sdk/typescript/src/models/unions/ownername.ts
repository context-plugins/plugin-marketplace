import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name on the SEPA bank account. */
export type Ownername = string;

export const ownernameSchema: Schema<Ownername> = s.of<Ownername>(s.union([s.string()]));
