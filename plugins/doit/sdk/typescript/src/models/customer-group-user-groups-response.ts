import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerGroupUserGroupInternalSchema,
  customerGroupUserGroupSchema,
  type CustomerGroupUserGroup,
} from "./customer-group-user-group.js";

export type CustomerGroupUserGroupsResponse = {
  /** Customer group the assignments belong to. */
  customerGroupId: string;
  /** User groups assigned to the customer group, sorted by user-group ID. */
  userGroups: CustomerGroupUserGroup[];
};

const customerGroupUserGroupsResponseProperties: s.Shape<CustomerGroupUserGroupsResponse> = {
  customerGroupId: s.string(),
  userGroups: s.array(s.lazy(() => customerGroupUserGroupInternalSchema)),
};

export const customerGroupUserGroupsResponseInternalSchema: Schema<CustomerGroupUserGroupsResponse> =
  s.object<CustomerGroupUserGroupsResponse>(customerGroupUserGroupsResponseProperties);

export const customerGroupUserGroupsResponseSchema: Schema<CustomerGroupUserGroupsResponse> = s.lazySchema(
  () =>
    s.object<CustomerGroupUserGroupsResponse>({
      ...customerGroupUserGroupsResponseProperties,
      customerGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
      userGroups: s.array(s.lazy(() => customerGroupUserGroupSchema)),
    }),
);
