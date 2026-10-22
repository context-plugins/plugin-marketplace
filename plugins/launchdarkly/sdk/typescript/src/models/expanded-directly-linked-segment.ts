import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewsSelfLinkSchema, type ViewsSelfLink } from "./views-self-link.js";

export type ExpandedDirectlyLinkedSegment = {
  key: string;
  name: string;
  environmentId: string;
  links: ViewsSelfLink;
};

export const expandedDirectlyLinkedSegmentSchema: Schema<ExpandedDirectlyLinkedSegment> =
  s.object<ExpandedDirectlyLinkedSegment>({
    key: s.string(),
    name: s.string(),
    environmentId: s.string(),
    links: viewsSelfLinkSchema,
  });
