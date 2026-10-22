import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./unions/interval.js";

export type TypeRequest = {
  text: string;
  interval?: Interval;
};

export const typeRequestSchema: Schema<TypeRequest> = s.object<TypeRequest>({
  text: s.string(),
  interval: s.optional(s.lazy(() => intervalSchema)),
});
