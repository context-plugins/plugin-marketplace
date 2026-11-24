import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCustomerGroupRequest = {
  name?: string;
  memberCustomerIds?: string[];
};

const updateCustomerGroupRequestProperties: s.Shape<UpdateCustomerGroupRequest> = {
  name: s.optional(s.string()),
  memberCustomerIds: s.optional(s.array(s.string())),
};

export const updateCustomerGroupRequestInternalSchema: Schema<UpdateCustomerGroupRequest> =
  s.object<UpdateCustomerGroupRequest>(updateCustomerGroupRequestProperties);

export const updateCustomerGroupRequestSchema: Schema<UpdateCustomerGroupRequest> = s.lazySchema(() =>
  s.object<UpdateCustomerGroupRequest>({
    ...updateCustomerGroupRequestProperties,
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    memberCustomerIds: s.optional(
      s.array(s.string().check(s.minLength(1), s.maxLength(200))).check(s.minLength(1), s.uniqueItems()),
    ),
  }),
);
