import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NodeType1 = {
  AppComponent: "app_component",
  AppGroup: "app_group",
  AppLink: "app_link",
  Attachment: "attachment",
  Group: "group",
  Host: "host",
  Link: "link",
  Service: "service",
} as const;
export type NodeType1 = (typeof NodeType1)[keyof typeof NodeType1] | (string & {});

export const nodeType1Schema: EnumSchema<NodeType1> = s.enumOf<NodeType1>(NodeType1);
