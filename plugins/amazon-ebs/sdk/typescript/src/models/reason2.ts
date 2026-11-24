import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for the exception. */
export const Reason2 = {
  SnapshotNotFound: "SNAPSHOT_NOT_FOUND",
  GrantNotFound: "GRANT_NOT_FOUND",
  DependencyResourceNotFound: "DEPENDENCY_RESOURCE_NOT_FOUND",
  ImageNotFound: "IMAGE_NOT_FOUND",
} as const;
export type Reason2 = (typeof Reason2)[keyof typeof Reason2] | (string & {});

export const reason2Schema: EnumSchema<Reason2> = s.enumOf<Reason2>(Reason2);
