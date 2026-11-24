import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { handshakeStatusSchema, type HandshakeStatus } from "./handshake-status.js";
import { iamDiffSchema, type IamDiff } from "./iam-diff.js";
import { mappedTenantSchema, type MappedTenant } from "./mapped-tenant.js";

export type ProgramManagementAccount = {
  dpmaId: string;
  /** 12-digit AWS account ID of the program management account. */
  accountId: string;
  roleArn: string;
  stackName: string;
  region: string;
  iamStatus: string;
  /**
   * Present when `iamStatus` indicates drift. `null` when the deployed IAM matches expectations.
   */
  iamDiff?: IamDiff;
  createdAt: Date;
  /** When this account's handshake/tenant state was last refreshed. `null` if never refreshed. */
  lastRefreshTime?: Date | null;
  tenants: MappedTenant[];
  /** Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA. */
  handshakeStatus: HandshakeStatus;
};

export const programManagementAccountSchema: Schema<ProgramManagementAccount> =
  s.object<ProgramManagementAccount>({
    dpmaId: s.string(),
    accountId: s.string(),
    roleArn: s.string(),
    stackName: s.string(),
    region: s.string(),
    iamStatus: s.string(),
    iamDiff: s.optional(s.lazy(() => iamDiffSchema)),
    createdAt: s.dateTime(),
    lastRefreshTime: s.optionalNullable(s.dateTime()),
    tenants: s.array(s.lazy(() => mappedTenantSchema)),
    handshakeStatus: handshakeStatusSchema,
  });
