import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerGroupUserInternalSchema,
  customerGroupUserSchema,
  type CustomerGroupUser,
} from "./customer-group-user.js";

export type CustomerGroupUsersResponse = {
  /** Customer group the assignments belong to. */
  customerGroupId: string;
  /** Users assigned to the customer group, sorted by user ID. */
  users: CustomerGroupUser[];
};

const customerGroupUsersResponseProperties: s.Shape<CustomerGroupUsersResponse> = {
  customerGroupId: s.string(),
  users: s.array(s.lazy(() => customerGroupUserInternalSchema)),
};

export const customerGroupUsersResponseInternalSchema: Schema<CustomerGroupUsersResponse> =
  s.object<CustomerGroupUsersResponse>(customerGroupUsersResponseProperties);

export const customerGroupUsersResponseSchema: Schema<CustomerGroupUsersResponse> = s.lazySchema(() =>
  s.object<CustomerGroupUsersResponse>({
    ...customerGroupUsersResponseProperties,
    customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
    users: s.array(s.lazy(() => customerGroupUserSchema)),
  }),
);
