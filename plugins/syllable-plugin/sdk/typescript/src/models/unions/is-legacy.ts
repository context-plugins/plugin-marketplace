import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the conversation occurred on the legacy Syllable system */
export type IsLegacy = boolean;

export const isLegacySchema: Schema<IsLegacy> = s.of<IsLegacy>(s.union([s.boolean()]));
