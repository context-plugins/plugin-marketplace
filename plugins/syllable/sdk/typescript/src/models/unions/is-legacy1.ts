import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the session occurred on the legacy Syllable system */
export type IsLegacy1 = boolean;

export const isLegacy1Schema: Schema<IsLegacy1> = s.of<IsLegacy1>(s.union([s.boolean()]));
