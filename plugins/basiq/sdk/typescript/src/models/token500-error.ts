import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1ConnectAuthenticationApiSchema,
  type Datum1ConnectAuthenticationApi,
} from "./datum1-connect-authentication-api.js";

export type Token500Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1ConnectAuthenticationApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const token500ErrorSchema: Schema<Token500Error> = s.object<Token500Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum1ConnectAuthenticationApiSchema)),
  },
  { additionalProperties: s.json() },
);
