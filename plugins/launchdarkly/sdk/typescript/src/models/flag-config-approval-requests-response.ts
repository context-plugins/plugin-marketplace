import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flagConfigApprovalRequestResponseSchema,
  type FlagConfigApprovalRequestResponse,
} from "./flag-config-approval-request-response.js";
import { linkSchema, type Link } from "./link.js";

export type FlagConfigApprovalRequestsResponse = {
  /** An array of approval requests */
  items: FlagConfigApprovalRequestResponse[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const flagConfigApprovalRequestsResponseSchema: Schema<FlagConfigApprovalRequestsResponse> =
  s.object<FlagConfigApprovalRequestsResponse>({
    items: s.array(s.lazy(() => flagConfigApprovalRequestResponseSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
