import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type5Schema, type Type5 } from "../type5.js";

/** The type of the message input. Always `message`. */
export type Type51 = Type5;

export const type51Schema: Schema<Type51> = s.of<Type51>(s.union([s.lazy(() => type5Schema)]));
