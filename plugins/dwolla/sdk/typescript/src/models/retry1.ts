import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links14Schema, type Links14 } from "./links14.js";

export type Retry1 = {
  links?: Links14;
  id?: string;
  timestamp?: Date;
};

export const retry1Schema: Schema<Retry1> = s.object<Retry1>({
  links: s.optional(s.lazy(() => links14Schema)),
  id: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  _keysMap: {
    links: "_links",
  },
});
