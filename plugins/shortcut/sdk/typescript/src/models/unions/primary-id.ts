import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the primary entity that has changed, if applicable. */
export type PrimaryId = number | string;

export const primaryIdSchema: Schema<PrimaryId> = s.of<PrimaryId>(s.union([s.int(), s.string()]));
