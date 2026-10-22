import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiringTargetErrorSchema, type ExpiringTargetError } from "./expiring-target-error.js";
import { expiringTargetSchema, type ExpiringTarget } from "./expiring-target.js";
import { linkSchema, type Link } from "./link.js";

export type ExpiringTargetPatchResponse = {
  /** A list of the results from each instruction */
  items: ExpiringTarget[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  totalInstructions?: number;
  successfulInstructions?: number;
  failedInstructions?: number;
  errors?: ExpiringTargetError[];
};

export const expiringTargetPatchResponseSchema: Schema<ExpiringTargetPatchResponse> =
  s.object<ExpiringTargetPatchResponse>({
    items: s.array(s.lazy(() => expiringTargetSchema)),
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
