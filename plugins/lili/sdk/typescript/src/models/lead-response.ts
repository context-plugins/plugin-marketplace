import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  uboResponseDataInternalSchema,
  uboResponseDataSchema,
  type UboResponseData,
} from "./ubo-response-data.js";

/** Contains the information on an account registration. */
export type LeadResponse = {
  /** A unique ID for the customer (same as person ID) */
  customerId: string;
  /** A unique URL to be used by the customer for a personalized application flow */
  location: string;
  /** The token that should be sent to Lili Connect UI */
  token: string;
  /**
   * The uniqueID provided by the partner in the Create Application call. Empty if none was supplied
   */
  partnerSuppliedId?: string;
  /**
   * The unique ID of the registered person
   *
   * @deprecated
   */
  personId: string;
  /** The metadata key-value pairs stored on the customer */
  metadata?: Record<string, string>;
  /** The UBOs of the business */
  uboData?: UboResponseData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const leadResponseProperties: s.Shape<LeadResponse> = {
  customerId: s.string(),
  location: s.string(),
  token: s.string(),
  partnerSuppliedId: s.optional(s.string()),
  personId: s.string(),
  metadata: s.optional(s.record(s.string(), s.string())),
  uboData: s.optional(s.array(s.lazy(() => uboResponseDataInternalSchema))),
};

export const leadResponseInternalSchema: Schema<LeadResponse> = s.object<LeadResponse>(
  leadResponseProperties,
  { additionalProperties: s.json() },
);

export const leadResponseSchema: Schema<LeadResponse> = s.lazySchema(() =>
  s.object<LeadResponse>(
    {
      ...leadResponseProperties,
      location: s.string().check(s.url()),
      uboData: s.optional(s.array(s.lazy(() => uboResponseDataSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
