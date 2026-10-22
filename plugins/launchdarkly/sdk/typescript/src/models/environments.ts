import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { environmentSchema, type Environment } from "./environment.js";
import { linkSchema, type Link } from "./link.js";

export type Environments = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The number of environments returned */
  totalCount?: number;
  /** An array of environments */
  items: Environment[];
};

export const environmentsSchema: Schema<Environments> = s.object<Environments>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  items: s.array(s.lazy(() => environmentSchema)),
  _keysMap: {
    links: "_links",
  },
});
