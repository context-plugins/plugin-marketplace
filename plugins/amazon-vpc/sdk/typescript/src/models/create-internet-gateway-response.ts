import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { internetGatewaySchema, type InternetGateway } from "./internet-gateway.js";

/** Response from the CreateInternetGateway action */
export type CreateInternetGatewayResponse = {
  /** Describes an internet gateway */
  internetGateway?: InternetGateway;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createInternetGatewayResponseSchema: Schema<CreateInternetGatewayResponse> =
  s.object<CreateInternetGatewayResponse>(
    {
      internetGateway: s.optional(s.lazy(() => internetGatewaySchema)),
    },
    { additionalProperties: s.json() },
  );
