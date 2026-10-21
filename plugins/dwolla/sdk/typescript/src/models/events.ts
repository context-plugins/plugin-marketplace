import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded88Schema, type Embedded88 } from "./embedded88.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type Events = {
  links?: Record<string, unknown>;
  additionalProperties?: HalLink;
  embedded?: Embedded88;
  total?: number;
};

export const eventsSchema: Schema<Events> = s.object<Events>({
  links: s.optional(s.record(s.string(), s.unknown())),
  additionalProperties: s.optional(s.lazy(() => halLinkSchema)),
  embedded: s.optional(s.lazy(() => embedded88Schema)),
  total: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
