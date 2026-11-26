import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Actionability1 = string;

export const actionability1Schema: Schema<Actionability1> = s.of<Actionability1>(s.union([s.string()]));
