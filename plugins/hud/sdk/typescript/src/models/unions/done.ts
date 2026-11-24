import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Done = boolean;

export const doneSchema: Schema<Done> = s.of<Done>(s.union([s.boolean()]));
