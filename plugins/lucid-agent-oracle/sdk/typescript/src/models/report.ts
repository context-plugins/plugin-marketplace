import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feed2Schema, type Feed2 } from "./feed2.js";

export type Report = {
  feeds: Feed2[];
};

export const reportSchema: Schema<Report> = s.object<Report>({
  feeds: s.array(s.lazy(() => feed2Schema)),
});
