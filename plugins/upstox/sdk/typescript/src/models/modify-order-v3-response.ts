import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modifyOrderDataSchema, type ModifyOrderData } from "./modify-order-data.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { statusSchema, type Status } from "./status.js";

export type ModifyOrderV3Response = {
  status?: Status;
  data?: ModifyOrderData;
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modifyOrderV3ResponseSchema: Schema<ModifyOrderV3Response> = s.object<ModifyOrderV3Response>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => modifyOrderDataSchema)),
    metadata: s.optional(s.lazy(() => orderMetadataSchema)),
  },
  { additionalProperties: s.json() },
);
