import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dids3Schema, type Dids3 } from "./dids3.js";
import {
  paginationDidlogicComNumbersInventoryApiSchema,
  type PaginationDidlogicComNumbersInventoryApi,
} from "./pagination-didlogic-com-numbers-inventory-api.js";

/** Paginated search results */
export type Dids2 = {
  /** Pagination metadata */
  pagination: PaginationDidlogicComNumbersInventoryApi;
  /** Array of available DID numbers */
  dids: Dids3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dids2Schema: Schema<Dids2> = s.object<Dids2>(
  {
    pagination: paginationDidlogicComNumbersInventoryApiSchema,
    dids: s.array(s.lazy(() => dids3Schema)),
  },
  { additionalProperties: s.json() },
);
