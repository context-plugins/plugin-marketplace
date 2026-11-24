import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MeWorkspace = {
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

export const meWorkspaceSchema: Schema<MeWorkspace> = s.object<MeWorkspace>(
  {
    id: s.int(),
    name: s.string(),
    role: s.optionalNullable(s.string()),
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
