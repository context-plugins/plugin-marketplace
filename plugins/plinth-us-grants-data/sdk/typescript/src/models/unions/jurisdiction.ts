import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Jurisdiction = string;

export const jurisdictionSchema: Schema<Jurisdiction> = s.of<Jurisdiction>(s.union([s.string()]));
