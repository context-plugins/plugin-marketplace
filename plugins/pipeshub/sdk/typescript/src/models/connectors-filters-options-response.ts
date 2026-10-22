import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";

export type ConnectorsFiltersOptionsResponse = {
  success: boolean;
  options: Option[];
  page?: number;
  limit?: number;
  hasMore?: boolean;
  /** Pass back to get the next page */
  cursor?: string | null;
  message?: string | null;
};

export const connectorsFiltersOptionsResponseSchema: Schema<ConnectorsFiltersOptionsResponse> =
  s.object<ConnectorsFiltersOptionsResponse>({
    success: s.boolean(),
    options: s.array(s.lazy(() => optionSchema)),
    page: s.optional(s.int()),
    limit: s.optional(s.int()),
    hasMore: s.optional(s.boolean()),
    cursor: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
  });
