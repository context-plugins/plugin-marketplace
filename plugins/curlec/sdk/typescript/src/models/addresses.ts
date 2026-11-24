import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";
import { registeredSchema, type Registered } from "./registered.js";

export type Addresses = {
  registered?: Registered;
  operation?: Operation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressesSchema: Schema<Addresses> = s.object<Addresses>(
  {
    registered: s.optional(s.lazy(() => registeredSchema)),
    operation: s.optional(s.lazy(() => operationSchema)),
  },
  { additionalProperties: s.json() },
);
