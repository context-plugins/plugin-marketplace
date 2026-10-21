import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Distributed deployment mode for the instance. */
export const DistMode = {
  DedicatedOrgLeader: "dedicated-org-leader",
  Edge: "edge",
  ManagedEdge: "managed-edge",
  Master: "master",
  OrgLeader: "org-leader",
  Outpost: "outpost",
  SearchSupervisor: "search-supervisor",
  Single: "single",
  Worker: "worker",
} as const;
export type DistMode = (typeof DistMode)[keyof typeof DistMode] | (string & {});

export const distModeSchema: EnumSchema<DistMode> = s.enumOf<DistMode>(DistMode);
