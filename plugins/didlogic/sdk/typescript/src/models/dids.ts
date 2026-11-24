import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dids1Schema, type Dids1 } from "./dids1.js";
import {
  paginationDidlogicComNumbersInventoryApiSchema,
  type PaginationDidlogicComNumbersInventoryApi,
} from "./pagination-didlogic-com-numbers-inventory-api.js";

/** Paginated list of available DID numbers */
export type Dids = {
  /** Pagination metadata */
  pagination: PaginationDidlogicComNumbersInventoryApi;
  /** Array of available DID numbers */
  dids: Dids1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const didsSchema: Schema<Dids> = s.object<Dids>(
  {
    pagination: paginationDidlogicComNumbersInventoryApiSchema,
    dids: s.array(s.lazy(() => dids1Schema)),
  },
  { additionalProperties: s.json() },
);
