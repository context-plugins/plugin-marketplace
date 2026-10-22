import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The contents of the assistant message. */
export type Content2 = string;

export const content2Schema: Schema<Content2> = s.of<Content2>(s.union([s.string()]));
