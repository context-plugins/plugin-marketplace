import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsSelfLinkSchema, type ViewsSelfLink } from "./views-self-link.js";

export type ExpandedDirectlyLinkedFlag = {
  key: string;
  name: string;
  links: ViewsSelfLink;
};

export const expandedDirectlyLinkedFlagSchema: Schema<ExpandedDirectlyLinkedFlag> =
  s.object<ExpandedDirectlyLinkedFlag>({
    key: s.string(),
    name: s.string(),
    links: viewsSelfLinkSchema,
  });
