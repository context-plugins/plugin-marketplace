import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ParentResourceRep = {
  links?: Record<string, Link>;
  /** The name of the parent resource */
  name?: string;
  /** The parent's resource specifier */
  resource?: string;
};

export const parentResourceRepSchema: Schema<ParentResourceRep> = s.object<ParentResourceRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.optional(s.string()),
  resource: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
