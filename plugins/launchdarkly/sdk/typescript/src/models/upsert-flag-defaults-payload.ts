import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { booleanFlagDefaultsSchema, type BooleanFlagDefaults } from "./boolean-flag-defaults.js";
import {
  defaultClientSideAvailabilitySchema,
  type DefaultClientSideAvailability,
} from "./default-client-side-availability.js";

export type UpsertFlagDefaultsPayload = {
  /** A list of default tags for each flag */
  tags: string[];
  /** Whether the flag should be temporary by default */
  temporary: boolean;
  booleanDefaults: BooleanFlagDefaults;
  defaultClientSideAvailability: DefaultClientSideAvailability;
};

export const upsertFlagDefaultsPayloadSchema: Schema<UpsertFlagDefaultsPayload> =
  s.object<UpsertFlagDefaultsPayload>({
    tags: s.array(s.string()),
    temporary: s.boolean(),
    booleanDefaults: booleanFlagDefaultsSchema,
    defaultClientSideAvailability: defaultClientSideAvailabilitySchema,
  });
