import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiringTargetSchema, type ExpiringTarget } from "./expiring-target.js";
import { linkSchema, type Link } from "./link.js";

export type ExpiringTargetGetResponse = {
  /** A list of expiring targets */
  items: ExpiringTarget[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const expiringTargetGetResponseSchema: Schema<ExpiringTargetGetResponse> =
  s.object<ExpiringTargetGetResponse>({
    items: s.array(s.lazy(() => expiringTargetSchema)),
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
