import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Timestamp = string;

export const timestampSchema: Schema<Timestamp> = s.of<Timestamp>(s.union([s.string()]));
