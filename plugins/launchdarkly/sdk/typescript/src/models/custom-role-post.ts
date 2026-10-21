import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementPostSchema, type StatementPost } from "./statement-post.js";

export type CustomRolePost = {
  /** A human-friendly name for the custom role */
  name: string;
  /** The custom role key */
  key: string;
  /** Description of custom role */
  description?: string;
  policy: StatementPost[];
  basePermissions?: string;
  resourceCategory?: string;
};

export const customRolePostSchema: Schema<CustomRolePost> = s.object<CustomRolePost>({
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  policy: s.array(s.lazy(() => statementPostSchema)),
  basePermissions: s.optional(s.string()),
  resourceCategory: s.optional(s.string()),
});
