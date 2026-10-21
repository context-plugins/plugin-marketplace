import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The type of itinerary object. */
export type Type491 = string;

export const type491Schema: Schema<Type491> = s.of<Type491>(s.union([s.string()]));
