import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type TargetResourceRep = {
  links?: Record<string, Link>;
  /** The name of the resource */
  name?: string;
  /** The resource specifier */
  resources?: string[];
};

export const targetResourceRepSchema: Schema<TargetResourceRep> = s.object<TargetResourceRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  name: s.optional(s.string()),
  resources: s.optional(s.array(s.string())),
  _keysMap: {
    links: "_links",
  },
});
