import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerGroupUser = {
  /** User assigned to the customer group. */
  userId: string;
};

const customerGroupUserProperties: s.Shape<CustomerGroupUser> = {
  userId: s.string(),
};

export const customerGroupUserInternalSchema: Schema<CustomerGroupUser> =
  s.object<CustomerGroupUser>(customerGroupUserProperties);

export const customerGroupUserSchema: Schema<CustomerGroupUser> = s.lazySchema(() =>
  s.object<CustomerGroupUser>({
    ...customerGroupUserProperties,
    userId: s.string().check(s.minLength(1), s.maxLength(200)),
  }),
);
