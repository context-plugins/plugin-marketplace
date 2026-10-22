import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { givingBlockOptionsSchema, type GivingBlockOptions } from "../giving-block-options.js";

/** Custom options to be passed to the `givingblock-givingblock` connector. */
export type GivingblockGivingblock = GivingBlockOptions;

export const givingblockGivingblockSchema: Schema<GivingblockGivingblock> = s.of<GivingblockGivingblock>(
  s.union([s.lazy(() => givingBlockOptionsSchema)]),
);
