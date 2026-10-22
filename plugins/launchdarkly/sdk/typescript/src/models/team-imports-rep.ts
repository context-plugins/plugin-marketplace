import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { memberImportItemSchema, type MemberImportItem } from "./member-import-item.js";

export type TeamImportsRep = {
  /** An array of details about the members requested to be added to this team */
  items?: MemberImportItem[];
};

export const teamImportsRepSchema: Schema<TeamImportsRep> = s.object<TeamImportsRep>({
  items: s.optional(s.array(s.lazy(() => memberImportItemSchema))),
});
