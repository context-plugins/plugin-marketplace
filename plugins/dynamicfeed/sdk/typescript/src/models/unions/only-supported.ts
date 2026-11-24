import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** exclude end-of-life release lines */
export type OnlySupported = boolean;

export const onlySupportedSchema: Schema<OnlySupported> = s.of<OnlySupported>(s.union([s.boolean()]));
