import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** only long-term-support lines */
export type OnlyLts = boolean;

export const onlyLtsSchema: Schema<OnlyLts> = s.of<OnlyLts>(s.union([s.boolean()]));
