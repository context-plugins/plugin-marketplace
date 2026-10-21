import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type50Schema, type Type50 } from "../type50.js";

/** Indicates whether the item is a physical good or a service/digital item. */
export type Type501 = Type50;

export const type501Schema: Schema<Type501> = s.of<Type501>(s.union([s.lazy(() => type50Schema)]));
