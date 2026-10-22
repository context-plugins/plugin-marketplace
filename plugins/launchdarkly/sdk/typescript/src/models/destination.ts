import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { kind6Schema, type Kind6 } from "./kind6.js";
import { linkSchema, type Link } from "./link.js";

export type Destination = {
  /** The ID of this Data Export destination */
  id?: string;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** A human-readable name for your Data Export destination */
  name?: string;
  /** The type of Data Export destination */
  kind?: Kind6;
  version?: number;
  /** An object with the configuration parameters required for the destination type */
  config?: Record<string, unknown>;
  /** Whether the export is on, that is, the status of the integration */
  on?: boolean;
  access?: Access;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  id: s.optional(s.string()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kind6Schema)),
  version: s.optional(s.float64()),
  config: s.optional(s.record(s.string(), s.unknown())),
  on: s.optional(s.boolean()),
  access: s.optional(s.lazy(() => accessSchema)),
  _keysMap: {
    id: "_id",
    links: "_links",
    access: "_access",
  },
});
