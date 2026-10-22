import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Cavv = string;

export const cavvSchema: Schema<Cavv> = s.of<Cavv>(s.union([s.string()]));
