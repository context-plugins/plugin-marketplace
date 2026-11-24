import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  endCustomerMappingResultStatusSchema,
  type EndCustomerMappingResultStatus,
} from "./end-customer-mapping-result-status.js";

export type EndCustomerMappingResult = {
  ecAccountId: string;
  ecCustomerId: string;
  curBasePath?: string;
  status: EndCustomerMappingResultStatus;
};

export const endCustomerMappingResultSchema: Schema<EndCustomerMappingResult> =
  s.object<EndCustomerMappingResult>({
    ecAccountId: s.string(),
    ecCustomerId: s.string(),
    curBasePath: s.optional(s.string()),
    status: endCustomerMappingResultStatusSchema,
  });
