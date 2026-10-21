import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { type4Schema, type Type4 } from "../type4.js";

export type Type41 = Type4;

export const type41Schema: Schema<Type41> = s.of<Type41>(s.union([s.lazy(() => type4Schema)]));
