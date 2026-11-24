import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  programManagementAccountStatusSchema,
  type ProgramManagementAccountStatus,
} from "./program-management-account-status.js";

export type ProgramManagementAccountsStatusResponse = {
  items: ProgramManagementAccountStatus[];
};

export const programManagementAccountsStatusResponseSchema: Schema<ProgramManagementAccountsStatusResponse> =
  s.object<ProgramManagementAccountsStatusResponse>({
    items: s.array(s.lazy(() => programManagementAccountStatusSchema)),
  });
