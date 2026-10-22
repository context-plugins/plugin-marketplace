import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiringTargetErrorSchema, type ExpiringTargetError } from "./expiring-target-error.js";
import { expiringUserTargetItemSchema, type ExpiringUserTargetItem } from "./expiring-user-target-item.js";
import { linkSchema, type Link } from "./link.js";

export type ExpiringUserTargetPatchResponse = {
  /** An array of expiring user targets */
  items: ExpiringUserTargetItem[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The total count of instructions sent in the PATCH request */
  totalInstructions?: number;
  /** The total count of successful instructions sent in the PATCH request */
  successfulInstructions?: number;
  /** The total count of the failed instructions sent in the PATCH request */
  failedInstructions?: number;
  /** An array of error messages for the failed instructions */
  errors?: ExpiringTargetError[];
};

export const expiringUserTargetPatchResponseSchema: Schema<ExpiringUserTargetPatchResponse> =
  s.object<ExpiringUserTargetPatchResponse>({
    items: s.array(s.lazy(() => expiringUserTargetItemSchema)),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    totalInstructions: s.optional(s.int()),
    successfulInstructions: s.optional(s.int()),
    failedInstructions: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => expiringTargetErrorSchema))),
    _keysMap: {
      links: "_links",
    },
  });
