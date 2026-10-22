import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandableApprovalRequestResponseSchema,
  type ExpandableApprovalRequestResponse,
} from "./expandable-approval-request-response.js";
import { linkSchema, type Link } from "./link.js";

export type ExpandableApprovalRequestsResponse = {
  /** An array of approval requests */
  items: ExpandableApprovalRequestResponse[];
  /** Total number of approval requests */
  totalCount: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const expandableApprovalRequestsResponseSchema: Schema<ExpandableApprovalRequestsResponse> =
  s.object<ExpandableApprovalRequestsResponse>({
    items: s.array(s.lazy(() => expandableApprovalRequestResponseSchema)),
    totalCount: s.int(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
