import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type Embedded88 = {
  events?: Event[];
};

export const embedded88Schema: Schema<Embedded88> = s.object<Embedded88>({
  events: s.optional(s.array(s.lazy(() => eventSchema))),
});
