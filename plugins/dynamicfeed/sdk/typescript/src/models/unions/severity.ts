import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** low | moderate | high | critical */
export type Severity = string;

export const severitySchema: Schema<Severity> = s.of<Severity>(s.union([s.string()]));
