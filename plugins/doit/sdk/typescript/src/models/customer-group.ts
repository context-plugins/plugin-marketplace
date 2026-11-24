import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerGroup = {
  /** Stable service-generated customer-group ID. */
  id: string;
  /** Authenticated tenant that owns the customer group. */
  customerId: string;
  /** Customer-visible customer-group name. */
  name: string;
  /** Customer IDs that are members of this group. */
  memberCustomerIds: string[];
  /** User or service-account identifier that created the group. */
  createdBy: string;
  /** Time the group was created. */
  timeCreated: Date;
  /** Time the group was last modified. */
  timeModified: Date;
};

const customerGroupProperties: s.Shape<CustomerGroup> = {
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  memberCustomerIds: s.array(s.string()),
  createdBy: s.string(),
  timeCreated: s.dateTime(),
  timeModified: s.dateTime(),
};

export const customerGroupInternalSchema: Schema<CustomerGroup> =
  s.object<CustomerGroup>(customerGroupProperties);

export const customerGroupSchema: Schema<CustomerGroup> = s.lazySchema(() =>
  s.object<CustomerGroup>({
    ...customerGroupProperties,
    id: s.string().check(s.minLength(1), s.maxLength(200)),
    name: s.string().check(s.minLength(1), s.maxLength(200)),
    memberCustomerIds: s
      .array(s.string().check(s.minLength(1), s.maxLength(200)))
      .check(s.minLength(1), s.uniqueItems()),
  }),
);
