import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";
import { linkSchema, type Link } from "./link.js";

export type ClientCollection = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** List of client objects */
  items: Client[];
};

export const clientCollectionSchema: Schema<ClientCollection> = s.object<ClientCollection>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.array(s.lazy(() => clientSchema)),
  _keysMap: {
    links: "_links",
  },
});
