import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerGroupInternalSchema, customerGroupSchema, type CustomerGroup } from "./customer-group.js";

export type CustomerGroupsResponse = {
  /** Ready customer groups owned by the authenticated tenant. */
  customerGroups: CustomerGroup[];
};

const customerGroupsResponseProperties: s.Shape<CustomerGroupsResponse> = {
  customerGroups: s.array(s.lazy(() => customerGroupInternalSchema)),
};

export const customerGroupsResponseInternalSchema: Schema<CustomerGroupsResponse> =
  s.object<CustomerGroupsResponse>(customerGroupsResponseProperties);

export const customerGroupsResponseSchema: Schema<CustomerGroupsResponse> = s.lazySchema(() =>
  s.object<CustomerGroupsResponse>({
    ...customerGroupsResponseProperties,
    customerGroups: s.array(s.lazy(() => customerGroupSchema)),
  }),
);
