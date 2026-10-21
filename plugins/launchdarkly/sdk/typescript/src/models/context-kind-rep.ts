import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ContextKindRep = {
  /** The context kind key */
  key: string;
  /** The context kind name */
  name: string;
  /** The context kind description */
  description: string;
  /** The context kind version */
  version: number;
  creationDate: number;
  lastModified: number;
  lastSeen?: number;
  createdFrom: string;
  /** Alias for archived. */
  hideInTargeting?: boolean;
  /** Whether the context kind is archived. Archived context kinds are unavailable for targeting. */
  archived?: boolean;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const contextKindRepSchema: Schema<ContextKindRep> = s.object<ContextKindRep>({
  key: s.string(),
  name: s.string(),
  description: s.string(),
  version: s.int(),
  creationDate: s.int(),
  lastModified: s.int(),
  lastSeen: s.optional(s.int()),
  createdFrom: s.string(),
  hideInTargeting: s.optional(s.boolean()),
  archived: s.optional(s.boolean()),
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
