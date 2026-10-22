import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The description of the role. */
export type Description28 = string;

export const description28Schema: Schema<Description28> = s.of<Description28>(s.union([s.string()]));
