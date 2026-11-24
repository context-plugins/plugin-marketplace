import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiKeySpendLimitDetailSchema, type ApiKeySpendLimitDetail } from "../api-key-spend-limit-detail.js";

export type Detail = string | ApiKeySpendLimitDetail;

export const detailSchema: Schema<Detail> = s.of<Detail>(
  s.union([s.string(), s.lazy(() => apiKeySpendLimitDetailSchema)]),
);
