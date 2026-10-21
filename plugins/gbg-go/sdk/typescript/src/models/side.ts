import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Side = {
  side: string;
  id: string;
  documentQuality: string;
  documentQualityScore: number;
};

export const sideSchema: Schema<Side> = s.object<Side>({
  side: s.string(),
  id: s.string(),
  documentQuality: s.string(),
  documentQualityScore: s.float64(),
});
