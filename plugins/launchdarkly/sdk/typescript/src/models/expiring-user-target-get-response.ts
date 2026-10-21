import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiringUserTargetItemSchema, type ExpiringUserTargetItem } from "./expiring-user-target-item.js";
import { linkSchema, type Link } from "./link.js";

export type ExpiringUserTargetGetResponse = {
  /** An array of expiring user targets */
  items: ExpiringUserTargetItem[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const expiringUserTargetGetResponseSchema: Schema<ExpiringUserTargetGetResponse> =
  s.object<ExpiringUserTargetGetResponse>({
    items: s.array(s.lazy(() => expiringUserTargetItemSchema)),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
