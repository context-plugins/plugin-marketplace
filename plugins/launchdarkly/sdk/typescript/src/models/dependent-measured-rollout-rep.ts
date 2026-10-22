import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type DependentMeasuredRolloutRep = {
  /** The guarded rollout measured rollout Id */
  id: string;
  /** The guarded rollout flag key */
  flagKey: string;
  /** The guarded rollout flag name */
  flagName: string;
  /** The guarded rollout flag purpose */
  flagPurpose?: string;
  /** The guarded rollout environment key */
  environmentKey: string;
  /** The guarded rollout environment name */
  environmentName: string;
  /** The guarded rollout status */
  status: string;
  creationDate: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const dependentMeasuredRolloutRepSchema: Schema<DependentMeasuredRolloutRep> =
  s.object<DependentMeasuredRolloutRep>({
    id: s.string(),
    flagKey: s.string(),
    flagName: s.string(),
    flagPurpose: s.optional(s.string()),
    environmentKey: s.string(),
    environmentName: s.string(),
    status: s.string(),
    creationDate: s.int(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      id: "_id",
      links: "_links",
    },
  });
