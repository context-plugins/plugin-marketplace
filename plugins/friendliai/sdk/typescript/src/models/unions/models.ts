import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Return only usage for the listed Model APIs and Dedicated Endpoints. Values are model IDs,
 * endpoint IDs, or a mix.
 */
export type Models = string[];

export const modelsSchema: Schema<Models> = s.of<Models>(s.union([s.array(s.string())]));
