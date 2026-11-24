import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";

export type Store = {
  /** The unique identifier for the store. */
  id?: string;
  /** The name of the store. */
  name?: string;
  /** The physical address of the store. */
  address?: Address1;
  /** The distance from the customer's location to the store. */
  distance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storeSchema: Schema<Store> = s.object<Store>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    address: s.optional(s.lazy(() => address1Schema)),
    distance: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
