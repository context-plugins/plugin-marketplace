import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pointSchema, type Point } from "./point.js";

export type Data6 = {
  feedId: string;
  period: string;
  interval: string;
  hasData: boolean;
  points: Point[];
};

export const data6Schema: Schema<Data6> = s.object<Data6>({
  feedId: s.string(),
  period: s.string(),
  interval: s.string(),
  hasData: s.boolean(),
  points: s.array(s.lazy(() => pointSchema)),
  _keysMap: {
    feedId: "feed_id",
    hasData: "has_data",
  },
});
