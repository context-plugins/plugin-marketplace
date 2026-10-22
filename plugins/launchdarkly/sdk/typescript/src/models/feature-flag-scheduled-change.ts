import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureFlagScheduledChange = {
  id: string;
  creationDate: number;
  /** The ID of the scheduled change maintainer */
  maintainerId: string;
  /** Version of the scheduled change */
  version: number;
  executionDate: number;
  instructions: Record<string, unknown>[];
  /** Details on any conflicting scheduled changes */
  conflicts?: Record<string, unknown>;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const featureFlagScheduledChangeSchema: Schema<FeatureFlagScheduledChange> =
  s.object<FeatureFlagScheduledChange>({
    id: s.string(),
    creationDate: s.int(),
    maintainerId: s.string(),
    version: s.int(),
    executionDate: s.int(),
    instructions: s.array(s.record(s.string(), s.unknown())),
    conflicts: s.optional(s.record(s.string(), s.unknown())),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      id: "_id",
      creationDate: "_creationDate",
      maintainerId: "_maintainerId",
      version: "_version",
      links: "_links",
    },
  });
