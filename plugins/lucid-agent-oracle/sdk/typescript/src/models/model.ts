import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Model = {
  modelId: string;
  provider: string;
  eventCount: number;
  pct: number;
};

export const modelSchema: Schema<Model> = s.object<Model>({
  modelId: s.string(),
  provider: s.string(),
  eventCount: s.int(),
  pct: s.float64(),
  _keysMap: {
    modelId: "model_id",
    eventCount: "event_count",
  },
});
