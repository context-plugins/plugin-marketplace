import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ReleaseProgression = {
  createdAt: number;
  completedAt?: number;
  /** The flag key */
  flagKey: string;
  /** The ID of the currently active release phase */
  activePhaseId?: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const releaseProgressionSchema: Schema<ReleaseProgression> = s.object<ReleaseProgression>({
  createdAt: s.int(),
  completedAt: s.optional(s.int()),
  flagKey: s.string(),
  activePhaseId: s.optional(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    createdAt: "_createdAt",
    completedAt: "_completedAt",
    links: "_links",
  },
});
