import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about which team an employee belongs to */
export type EmployeeTeamInfo = {
  /** unique identifier for this team */
  id?: string;
  /** Team name */
  name?: string;
  /** Link to internal company team page */
  url?: string;
};

export const employeeTeamInfoSchema: Schema<EmployeeTeamInfo> = s.object<EmployeeTeamInfo>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
});
