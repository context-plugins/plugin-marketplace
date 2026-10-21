import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

/** Base schema containing common fields for all customer types */
export type BaseCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
};

export const baseCustomerSchema: Schema<BaseCustomer> = s.object<BaseCustomer>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  id: s.string(),
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  correlationId: s.optional(s.string()),
  created: s.dateTime(),
  _keysMap: {
    links: "_links",
  },
});
