import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type4Schema, type Type4 } from "../type4.js";

/**
 * Type of the monitor being updated. Required when `settings` is provided; must be `event_stream`
 * (snapshot monitors have no updatable type-specific settings).
 */
export type Type41 = Type4;

export const type41Schema: Schema<Type41> = s.of<Type41>(s.union([s.lazy(() => type4Schema)]));
