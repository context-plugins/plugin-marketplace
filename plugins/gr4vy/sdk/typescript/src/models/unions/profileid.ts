import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Client profile to use during checkout. */
export type Profileid = string;

export const profileidSchema: Schema<Profileid> = s.of<Profileid>(s.union([s.string()]));
