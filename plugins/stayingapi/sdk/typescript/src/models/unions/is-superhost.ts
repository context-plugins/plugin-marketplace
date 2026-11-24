import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type IsSuperhost = boolean;

export const isSuperhostSchema: Schema<IsSuperhost> = s.of<IsSuperhost>(s.union([s.boolean()]));
