import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Node type. */
export const NodeType = {
  AppComponent: "app_component",
  AppGroup: "app_group",
  AppLink: "app_link",
  Attachment: "attachment",
  Group: "group",
  Host: "host",
  Link: "link",
  Service: "service",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType] | (string & {});

export const nodeTypeSchema: EnumSchema<NodeType> = s.enumOf<NodeType>(NodeType);
