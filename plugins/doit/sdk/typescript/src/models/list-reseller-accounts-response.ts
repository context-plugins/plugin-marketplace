import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resellerAccountSchema, type ResellerAccount } from "./reseller-account.js";

export type ListResellerAccountsResponse = {
  items: ResellerAccount[];
};

export const listResellerAccountsResponseSchema: Schema<ListResellerAccountsResponse> =
  s.object<ListResellerAccountsResponse>({
    items: s.array(s.lazy(() => resellerAccountSchema)),
  });
