import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { removeBankSchema, type RemoveBank } from "../remove-bank.js";
import {
  updateCardFundingSourceSchema,
  type UpdateCardFundingSource,
} from "../update-card-funding-source.js";
import { updateUnverifiedBankSchema, type UpdateUnverifiedBank } from "../update-unverified-bank.js";
import { updateVerifiedBankSchema, type UpdateVerifiedBank } from "../update-verified-bank.js";

export type FundingSourcesRequest =
  | UpdateUnverifiedBank
  | UpdateVerifiedBank
  | UpdateCardFundingSource
  | RemoveBank;

export const fundingSourcesRequestSchema: Schema<FundingSourcesRequest> = s.of<FundingSourcesRequest>(
  s.union([
    s.lazy(() => updateUnverifiedBankSchema),
    s.lazy(() => updateVerifiedBankSchema),
    s.lazy(() => updateCardFundingSourceSchema),
    s.lazy(() => removeBankSchema),
  ]),
);
