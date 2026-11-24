import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data2FlightdeckDopeSecurityPublicApiSpecificationSchema,
  type Data2FlightdeckDopeSecurityPublicApiSpecification,
} from "./data2-flightdeck-dope-security-public-api-specification.js";

/** Request body for updating user/group exceptions on categories */
export type PolicyContentExceptionsRequest = {
  data: Data2FlightdeckDopeSecurityPublicApiSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policyContentExceptionsRequestSchema: Schema<PolicyContentExceptionsRequest> =
  s.object<PolicyContentExceptionsRequest>(
    {
      data: data2FlightdeckDopeSecurityPublicApiSpecificationSchema,
    },
    { additionalProperties: s.json() },
  );
