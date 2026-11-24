import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FundingReceived = Record<string, unknown>;

export const fundingReceivedSchema: Schema<FundingReceived> = s.of<FundingReceived>(
  s.union([s.record(s.string(), s.unknown())]),
);
