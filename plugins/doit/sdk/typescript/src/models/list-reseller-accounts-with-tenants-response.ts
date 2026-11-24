import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  resellerAccountWithTenantsSchema,
  type ResellerAccountWithTenants,
} from "./reseller-account-with-tenants.js";

export type ListResellerAccountsWithTenantsResponse = {
  items: ResellerAccountWithTenants[];
};

export const listResellerAccountsWithTenantsResponseSchema: Schema<ListResellerAccountsWithTenantsResponse> =
  s.object<ListResellerAccountsWithTenantsResponse>({
    items: s.array(s.lazy(() => resellerAccountWithTenantsSchema)),
  });
