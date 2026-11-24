import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  programManagementAccountSchema,
  type ProgramManagementAccount,
} from "./program-management-account.js";

export type ProgramManagementAccountList = {
  items: ProgramManagementAccount[];
  /** Opaque cursor for the next page. Absent when this is the last page. */
  pageToken?: string;
  rowCount: number;
};

export const programManagementAccountListSchema: Schema<ProgramManagementAccountList> =
  s.object<ProgramManagementAccountList>({
    items: s.array(s.lazy(() => programManagementAccountSchema)),
    pageToken: s.optional(s.string()),
    rowCount: s.int(),
  });
