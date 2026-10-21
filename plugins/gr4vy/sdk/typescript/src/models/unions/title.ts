import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Title of the passenger. */
export type Title = string;

export const titleSchema: Schema<Title> = s.of<Title>(s.union([s.string()]));
