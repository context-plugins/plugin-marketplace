import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The slug of the organization used for URLs in the Console UI. Null until slug backfill has been
 * run.
 */
export type Slug = string;

export const slugSchema: Schema<Slug> = s.of<Slug>(s.union([s.string()]));
