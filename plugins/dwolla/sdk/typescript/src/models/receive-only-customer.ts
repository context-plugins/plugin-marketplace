import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { statusSchema, type Status } from "./status.js";

/** Receive-only user - can only receive funds, not send */
export type ReceiveOnlyCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
  /** @default "receive-only" */
  type?: "receive-only";
  status: Status;
  businessName?: string;
};

export const receiveOnlyCustomerSchema: Schema<ReceiveOnlyCustomer> = s.object<ReceiveOnlyCustomer>({
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
  type: s.defaulted(s.literal("receive-only"), "receive-only"),
  status: statusSchema,
  businessName: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
