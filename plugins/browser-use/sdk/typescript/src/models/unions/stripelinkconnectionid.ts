import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Stripelinkconnectionid = string;

export const stripelinkconnectionidSchema: Schema<Stripelinkconnectionid> = s.of<Stripelinkconnectionid>(
  s.union([s.string()]),
);
