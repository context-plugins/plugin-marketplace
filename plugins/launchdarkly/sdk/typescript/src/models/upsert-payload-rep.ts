import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { booleanFlagDefaultsSchema, type BooleanFlagDefaults } from "./boolean-flag-defaults.js";
import {
  defaultClientSideAvailabilitySchema,
  type DefaultClientSideAvailability,
} from "./default-client-side-availability.js";
import { linkSchema, type Link } from "./link.js";

export type UpsertPayloadRep = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** A list of default tags for each flag */
  tags: string[];
  /** Whether the flag should be temporary by default */
  temporary: boolean;
  booleanDefaults: BooleanFlagDefaults;
  defaultClientSideAvailability: DefaultClientSideAvailability;
};

export const upsertPayloadRepSchema: Schema<UpsertPayloadRep> = s.object<UpsertPayloadRep>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  tags: s.array(s.string()),
  temporary: s.boolean(),
  booleanDefaults: booleanFlagDefaultsSchema,
  defaultClientSideAvailability: defaultClientSideAvailabilitySchema,
  _keysMap: {
    links: "_links",
  },
});
