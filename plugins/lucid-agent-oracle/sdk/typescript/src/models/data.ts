import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modelSchema, type Model } from "./model.js";

export type Data = {
  period: string;
  hasData: boolean;
  models: Model[];
  totalEvents: number;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  period: s.string(),
  hasData: s.boolean(),
  models: s.array(s.lazy(() => modelSchema)),
  totalEvents: s.int(),
  _keysMap: {
    hasData: "has_data",
    totalEvents: "total_events",
  },
});
