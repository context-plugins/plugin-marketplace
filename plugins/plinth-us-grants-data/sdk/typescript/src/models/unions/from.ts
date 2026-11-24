import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** 0-based offset, as Candid. */
export type From = number;

export const fromSchema: Schema<From> = s.of<From>(s.union([s.int()]));
