import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iamDiffSchema, type IamDiff } from "./iam-diff.js";

export type ProgramManagementAccountStatus = {
  dpmaId: string;
  /** 12-digit AWS account ID of the program management account. */
  accountId: string;
  iamStatus: string;
  /**
   * Present when `iamStatus` indicates drift. `null` when the deployed IAM matches expectations.
   */
  iamDiff?: IamDiff;
  createdAt: Date;
  /** When this account's root record was last updated. `null` if never updated. */
  updatedAt?: Date | null;
};

export const programManagementAccountStatusSchema: Schema<ProgramManagementAccountStatus> =
  s.object<ProgramManagementAccountStatus>({
    dpmaId: s.string(),
    accountId: s.string(),
    iamStatus: s.string(),
    iamDiff: s.optional(s.lazy(() => iamDiffSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.optionalNullable(s.dateTime()),
  });
