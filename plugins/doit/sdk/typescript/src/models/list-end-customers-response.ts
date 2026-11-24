import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endCustomerNodeSchema, type EndCustomerNode } from "./end-customer-node.js";

export type ListEndCustomersResponse = {
  items: EndCustomerNode[];
};

export const listEndCustomersResponseSchema: Schema<ListEndCustomersResponse> =
  s.object<ListEndCustomersResponse>({
    items: s.array(s.lazy(() => endCustomerNodeSchema)),
  });
