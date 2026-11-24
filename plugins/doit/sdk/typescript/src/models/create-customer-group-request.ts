import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateCustomerGroupRequest = {
  name: string;
  memberCustomerIds: string[];
};

const createCustomerGroupRequestProperties: s.Shape<CreateCustomerGroupRequest> = {
  name: s.string(),
  memberCustomerIds: s.array(s.string()),
};

export const createCustomerGroupRequestInternalSchema: Schema<CreateCustomerGroupRequest> =
  s.object<CreateCustomerGroupRequest>(createCustomerGroupRequestProperties);

export const createCustomerGroupRequestSchema: Schema<CreateCustomerGroupRequest> = s.lazySchema(() =>
  s.object<CreateCustomerGroupRequest>({
    ...createCustomerGroupRequestProperties,
    name: s.string().check(s.minLength(1), s.maxLength(200)),
    memberCustomerIds: s
      .array(s.string().check(s.minLength(1), s.maxLength(200)))
      .check(s.minLength(1), s.uniqueItems()),
  }),
);
