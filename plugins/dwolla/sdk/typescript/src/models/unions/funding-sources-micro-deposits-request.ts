import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { verifyMicroDeposits1Schema, type VerifyMicroDeposits1 } from "../verify-micro-deposits1.js";

export type FundingSourcesMicroDepositsRequest = Record<string, unknown> | VerifyMicroDeposits1 | null;

export const fundingSourcesMicroDepositsRequestSchema: Schema<FundingSourcesMicroDepositsRequest> =
  s.of<FundingSourcesMicroDepositsRequest>(
    s.nullable(s.union([s.record(s.string(), s.unknown()), s.lazy(() => verifyMicroDeposits1Schema)])),
  );
