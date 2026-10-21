import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The passenger's frequent flyer number. */
export type FrequentFlyerNumber = string;

export const frequentFlyerNumberSchema: Schema<FrequentFlyerNumber> = s.of<FrequentFlyerNumber>(
  s.union([s.string()]),
);
