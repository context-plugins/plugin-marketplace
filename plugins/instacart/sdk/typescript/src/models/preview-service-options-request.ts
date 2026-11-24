import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type PreviewServiceOptionsRequest = {
  /** The unique identifier of the store to preview service options for. */
  storeId?: string;
  /** The delivery or pickup address. */
  address?: Address;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const previewServiceOptionsRequestSchema: Schema<PreviewServiceOptionsRequest> =
  s.object<PreviewServiceOptionsRequest>(
    {
      storeId: s.optional(s.string()),
      address: s.optional(s.lazy(() => addressSchema)),
      _keysMap: {
        storeId: "store_id",
      },
    },
    { additionalProperties: s.json() },
  );
