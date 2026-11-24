import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GovernmentFunding = Record<string, unknown>;

export const governmentFundingSchema: Schema<GovernmentFunding> = s.of<GovernmentFunding>(
  s.union([s.record(s.string(), s.unknown())]),
);
