import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Workspace this request is scoped to (resolved from the API key or the session's active
 * workspace). List all your workspaces at `/api/workspaces`.
 */
export type MeWorkspace1 = {
  id: number;
  name: string;
  /**
   * Your role in this workspace (`owner`, `admin`, or `member`). `null` when the authenticated user
   * has no membership row here.
   */
  role?: string | null;
  /** Stable URL slug, e.g. `audioscrape`. */
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meWorkspace1Schema: Schema<MeWorkspace1> = s.object<MeWorkspace1>(
  {
    id: s.int(),
    name: s.string(),
    role: s.optionalNullable(s.string()),
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
