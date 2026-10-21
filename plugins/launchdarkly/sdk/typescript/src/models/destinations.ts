import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { linkSchema, type Link } from "./link.js";

export type Destinations = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** An array of Data Export destinations */
  items?: Destination[];
};

export const destinationsSchema: Schema<Destinations> = s.object<Destinations>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  items: s.optional(s.array(s.lazy(() => destinationSchema))),
  _keysMap: {
    links: "_links",
  },
});
