import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceSummary = {
  description?: string | null;
  id: number;
  /**
   * Whether this is the workspace the authenticating API key (or session) is scoped to — the one
   * searches, uploads, and quotas run against.
   */
  isCurrent: boolean;
  memberCount: number;
  name: string;
  /** The calling user's role in this workspace: `owner`, `admin`, or `member`. */
  role: string;
  /** Stable URL slug, e.g. `audioscrape`. */
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceSummarySchema: Schema<WorkspaceSummary> = s.object<WorkspaceSummary>(
  {
    description: s.optionalNullable(s.string()),
    id: s.int(),
    isCurrent: s.boolean(),
    memberCount: s.int(),
    name: s.string(),
    role: s.string(),
    slug: s.string(),
    _keysMap: {
      isCurrent: "is_current",
      memberCount: "member_count",
    },
  },
  { additionalProperties: s.json() },
);
