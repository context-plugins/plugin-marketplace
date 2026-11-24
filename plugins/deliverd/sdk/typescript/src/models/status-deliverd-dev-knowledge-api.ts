import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevKnowledgeApi = {
  Confirmed: "confirmed",
  Proposed: "proposed",
  Rejected: "rejected",
  Retired: "retired",
  Superseded: "superseded",
  Open: "open",
  All: "all",
} as const;
export type StatusDeliverdDevKnowledgeApi =
  | (typeof StatusDeliverdDevKnowledgeApi)[keyof typeof StatusDeliverdDevKnowledgeApi]
  | (string & {});

export const statusDeliverdDevKnowledgeApiSchema: EnumSchema<StatusDeliverdDevKnowledgeApi> =
  s.enumOf<StatusDeliverdDevKnowledgeApi>(StatusDeliverdDevKnowledgeApi);
