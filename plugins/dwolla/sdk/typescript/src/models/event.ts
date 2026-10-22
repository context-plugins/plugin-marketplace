import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Event = {
  links?: Record<string, HalLink>;
  id?: string;
  created?: Date;
  topic?: string;
  resourceId?: string;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  topic: s.optional(s.string()),
  resourceId: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
