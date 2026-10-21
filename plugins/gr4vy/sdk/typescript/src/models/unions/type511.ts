import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type51Schema, type Type51 } from "../type51.js";

/** A classification for the method of purchase fulfillment. */
export type Type511 = Type51;

export const type511Schema: Schema<Type511> = s.of<Type511>(s.union([s.lazy(() => type51Schema)]));
