import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latitudeOptionsSchema, type LatitudeOptions } from "../latitude-options.js";

/** Custom options to be passed to the `gem-gem` connector. */
export type GemGem = LatitudeOptions;

export const gemGemSchema: Schema<GemGem> = s.of<GemGem>(s.union([s.lazy(() => latitudeOptionsSchema)]));
