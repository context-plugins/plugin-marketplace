import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";

/** A filter on one user field. */
export type PlatformUserFilter = {
  /**
   * The user field to filter on.
   * - name: matches users whose display_name contains the value, ignoring case and surrounding
   *   whitespace. Each value is at most 256 characters.
   *
   * - email: matches the user with the email, ignoring case. An alias email matches only when the
   *   list would return it in alias_emails.
   *
   * - manager_id: matches the direct reports of the user with this user_id. An alias ID of a merged
   *   person matches the same reports.
   *
   * - department_id: matches users in the department, as returned in department.department_id.
   */
  field: string;
  /** The values to match. A user matches when any value matches. */
  values: string[];
  /**
   * The only supported operator is EQUALS. Defaults to EQUALS.
   *
   * @default PlatformFilterOperator1.Equals
   */
  operator?: PlatformFilterOperator1;
};

export const platformUserFilterSchema: Schema<PlatformUserFilter> = s.object<PlatformUserFilter>({
  field: s.string(),
  values: s.array(s.string()),
  operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
});
