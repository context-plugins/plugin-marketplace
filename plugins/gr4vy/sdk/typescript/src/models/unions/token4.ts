import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Transaction session token used to retrieve session data for direct client integrations. */
export type Token4 = string;

export const token4Schema: Schema<Token4> = s.of<Token4>(s.union([s.string()]));
