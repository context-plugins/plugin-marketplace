import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigRepSchema, type AiConfigRep } from "./ai-config-rep.js";
import { expandedFlagRepSchema, type ExpandedFlagRep } from "./expanded-flag-rep.js";
import { userSegmentSchema, type UserSegment } from "./user-segment.js";

export type ExpandedResourceRep = {
  /** The type of resource */
  kind: string;
  aiConfig?: AiConfigRep;
  flag?: ExpandedFlagRep;
  segment?: UserSegment;
};

export const expandedResourceRepSchema: Schema<ExpandedResourceRep> = s.object<ExpandedResourceRep>({
  kind: s.string(),
  aiConfig: s.optional(s.lazy(() => aiConfigRepSchema)),
  flag: s.optional(s.lazy(() => expandedFlagRepSchema)),
  segment: s.optional(s.lazy(() => userSegmentSchema)),
});
