import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { nameSchema, type Name } from "./name.js";

export type FlagStatusRep = {
  /** Status of the flag */
  name: Name;
  /** Timestamp of last time flag was requested */
  lastRequested?: Date;
  /** Default value seen from code */
  default?: Record<string, unknown>;
  links: Record<string, Link>;
};

export const flagStatusRepSchema: Schema<FlagStatusRep> = s.object<FlagStatusRep>({
  name: nameSchema,
  lastRequested: s.optional(s.dateTime()),
  default: s.optional(s.record(s.string(), s.unknown())),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
