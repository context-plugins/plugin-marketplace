import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayXContactsApiSchema,
  type EntityRazorpayXContactsApi,
} from "./entity-razorpay-xcontacts-api.js";
import {
  typeRazorpayXContactsApiSchema,
  type TypeRazorpayXContactsApi,
} from "./type-razorpay-xcontacts-api.js";

/** RazorpayX payout recipient. Created before sending payouts. */
export type XContact = {
  /** Contact ID (cont_*) */
  id?: string;
  entity?: EntityRazorpayXContactsApi;
  name?: string;
  email?: string;
  /** Phone number */
  contact?: string;
  /** Built-in types only via API; custom types must be created on Dashboard first */
  type?: TypeRazorpayXContactsApi;
  /** External reference (must be unique per merchant) */
  referenceId?: string;
  batchId?: string;
  active?: boolean;
  notes?: Record<string, unknown>;
  /** Unix timestamp */
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const xContactProperties: s.Shape<XContact> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayXContactsApiSchema)),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  contact: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeRazorpayXContactsApiSchema)),
  referenceId: s.optional(s.string()),
  batchId: s.optional(s.string()),
  active: s.optional(s.boolean()),
  notes: s.optional(s.record(s.string(), s.unknown())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    referenceId: "reference_id",
    batchId: "batch_id",
    createdAt: "created_at",
  },
};

export const xContactInternalSchema: Schema<XContact> = s.object<XContact>(xContactProperties, {
  additionalProperties: s.json(),
});

export const xContactSchema: Schema<XContact> = s.lazySchema(() =>
  s.object<XContact>(
    {
      ...xContactProperties,
      name: s.optional(s.string().check(s.minLength(3), s.maxLength(50))),
      email: s.optional(s.string().check(s.email())),
      referenceId: s.optional(s.string().check(s.maxLength(40))),
    },
    { additionalProperties: s.json() },
  ),
);
