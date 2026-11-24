import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Kind = {
  Edges: "edges",
  GroupMembers: "group_members",
  Both: "both",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
