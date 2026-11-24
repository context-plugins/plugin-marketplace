import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LastUpdated = string;

export const lastUpdatedSchema: Schema<LastUpdated> = s.of<LastUpdated>(s.union([s.string()]));
