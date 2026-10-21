import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's department. Absent when the user has no department. */
export type PlatformDepartmentReference1 = {
  /**
   * Opaque department ID. The users and departments APIs return the same ID for the same
   * department. A renamed department gets a new ID.
   */
  departmentId: string;
  /** Department name, exactly as the directory stores it. */
  displayName: string;
};

export const platformDepartmentReference1Schema: Schema<PlatformDepartmentReference1> =
  s.object<PlatformDepartmentReference1>({
    departmentId: s.string(),
    displayName: s.string(),
    _keysMap: {
      departmentId: "department_id",
      displayName: "display_name",
    },
  });
