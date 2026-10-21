import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Event1 = {
  href?: string;
};

export const event1Schema: Schema<Event1> = s.object<Event1>({
  href: s.optional(s.string()),
});
