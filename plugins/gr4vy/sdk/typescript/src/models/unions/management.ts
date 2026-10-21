import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The corporation. */
export type Management = string;

export const managementSchema: Schema<Management> = s.of<Management>(s.union([s.string()]));
