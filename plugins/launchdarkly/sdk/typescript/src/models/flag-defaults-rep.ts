import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { booleanDefaultsSchema, type BooleanDefaults } from "./boolean-defaults.js";
import { clientSideAvailabilitySchema, type ClientSideAvailability } from "./client-side-availability.js";
import { linkSchema, type Link } from "./link.js";

export type FlagDefaultsRep = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** A unique key for the flag default */
  key?: string;
  /** A list of default tags for each flag */
  tags?: string[];
  /** Whether the flag should be temporary by default */
  temporary?: boolean;
  defaultClientSideAvailability?: ClientSideAvailability;
  booleanDefaults?: BooleanDefaults;
};

export const flagDefaultsRepSchema: Schema<FlagDefaultsRep> = s.object<FlagDefaultsRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  key: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  temporary: s.optional(s.boolean()),
  defaultClientSideAvailability: s.optional(s.lazy(() => clientSideAvailabilitySchema)),
  booleanDefaults: s.optional(s.lazy(() => booleanDefaultsSchema)),
  _keysMap: {
    links: "_links",
  },
});
