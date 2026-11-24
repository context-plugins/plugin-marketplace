import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** only models that accept images */
export type NeedsVision = boolean;

export const needsVisionSchema: Schema<NeedsVision> = s.of<NeedsVision>(s.union([s.boolean()]));
