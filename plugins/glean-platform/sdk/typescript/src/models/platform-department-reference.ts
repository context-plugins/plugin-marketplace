import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A reference to a department in the Glean directory. */
export type PlatformDepartmentReference = {
  /**
   * Opaque department ID. The users and departments APIs return the same ID for the same
   * department. A renamed department gets a new ID.
   */
  departmentId: string;
  /** Department name, exactly as the directory stores it. */
  displayName: string;
};

export const platformDepartmentReferenceSchema: Schema<PlatformDepartmentReference> =
  s.object<PlatformDepartmentReference>({
    departmentId: s.string(),
    displayName: s.string(),
    _keysMap: {
      departmentId: "department_id",
      displayName: "display_name",
    },
  });
