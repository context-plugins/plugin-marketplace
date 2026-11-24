import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type4Schema, type Type4 } from "../type4.js";

/**
 * Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all
 * types.
 */
export type Type5VariantCchzdo = Type4[];

export const type5VariantCchzdoSchema: Schema<Type5VariantCchzdo> = s.of<Type5VariantCchzdo>(
  s.union([s.array(s.lazy(() => type4Schema))]),
);
