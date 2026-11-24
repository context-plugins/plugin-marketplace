import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WorkEmail = string;

export const workEmailSchema: Schema<WorkEmail> = s.of<WorkEmail>(s.union([s.string()]));
