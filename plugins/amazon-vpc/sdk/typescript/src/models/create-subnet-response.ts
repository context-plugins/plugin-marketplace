import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subnetSchema, type Subnet } from "./subnet.js";

/** Response from the CreateSubnet action */
export type CreateSubnetResponse = {
  /** Describes a subnet */
  subnet?: Subnet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSubnetResponseSchema: Schema<CreateSubnetResponse> = s.object<CreateSubnetResponse>(
  {
    subnet: s.optional(s.lazy(() => subnetSchema)),
  },
  { additionalProperties: s.json() },
);
