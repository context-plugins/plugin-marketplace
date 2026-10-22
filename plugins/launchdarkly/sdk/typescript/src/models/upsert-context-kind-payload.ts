import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpsertContextKindPayload = {
  /** The context kind name */
  name: string;
  /** The context kind description */
  description?: string;
  /** Alias for archived. */
  hideInTargeting?: boolean;
  /** Whether the context kind is archived. Archived context kinds are unavailable for targeting. */
  archived?: boolean;
  /** The context kind version. If not specified when the context kind is created, defaults to 1. */
  version?: number;
};

export const upsertContextKindPayloadSchema: Schema<UpsertContextKindPayload> =
  s.object<UpsertContextKindPayload>({
    name: s.string(),
    description: s.optional(s.string()),
    hideInTargeting: s.optional(s.boolean()),
    archived: s.optional(s.boolean()),
    version: s.optional(s.int()),
  });
