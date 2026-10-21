import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The last updated date of the prompt */
export type LastUpdated = string;

export const lastUpdatedSchema: Schema<LastUpdated> = s.of<LastUpdated>(s.union([s.string()]));
