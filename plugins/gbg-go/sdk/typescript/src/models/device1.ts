import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modelSchema, type Model } from "./model.js";

export type Device1 = {
  id: string;
  manufacturer: string;
  model: Model;
};

export const device1Schema: Schema<Device1> = s.object<Device1>({
  id: s.string(),
  manufacturer: s.string(),
  model: modelSchema,
});
