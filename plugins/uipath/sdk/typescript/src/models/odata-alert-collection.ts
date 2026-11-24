import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

/** OData collection response containing alerts */
export type ODataAlertCollection = {
  value?: Value[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataAlertCollectionSchema: Schema<ODataAlertCollection> = s.object<ODataAlertCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueSchema))),
  },
  { additionalProperties: s.json() },
);
