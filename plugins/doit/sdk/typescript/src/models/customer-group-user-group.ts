import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerGroupUserGroup = {
  /** User group assigned to the customer group. */
  userGroupId: string;
};

const customerGroupUserGroupProperties: s.Shape<CustomerGroupUserGroup> = {
  userGroupId: s.string(),
};

export const customerGroupUserGroupInternalSchema: Schema<CustomerGroupUserGroup> =
  s.object<CustomerGroupUserGroup>(customerGroupUserGroupProperties);

export const customerGroupUserGroupSchema: Schema<CustomerGroupUserGroup> = s.lazySchema(() =>
  s.object<CustomerGroupUserGroup>({
    ...customerGroupUserGroupProperties,
    userGroupId: s.string().check(s.minLength(1), s.maxLength(200)),
  }),
);
