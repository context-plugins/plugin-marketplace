import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1FlightdeckDopeSecurityPublicApiSpecificationSchema,
  type Data1FlightdeckDopeSecurityPublicApiSpecification,
} from "./data1-flightdeck-dope-security-public-api-specification.js";

export type PolicyContentResponse = {
  data: Data1FlightdeckDopeSecurityPublicApiSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policyContentResponseSchema: Schema<PolicyContentResponse> = s.object<PolicyContentResponse>(
  {
    data: data1FlightdeckDopeSecurityPublicApiSpecificationSchema,
  },
  { additionalProperties: s.json() },
);
