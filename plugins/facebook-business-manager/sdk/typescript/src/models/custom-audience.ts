import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { deliveryStatusSchema, type DeliveryStatus } from "./delivery-status.js";
import { operationStatusSchema, type OperationStatus } from "./operation-status.js";
import { subtypeSchema, type Subtype } from "./subtype.js";

export type CustomAudience = {
  /** The ID of the custom audience */
  id?: string;
  /** The name of the custom audience */
  name?: string;
  /** Description of the audience */
  description?: string;
  /** The subtype of the custom audience */
  subtype?: Subtype;
  /** Approximate number of people in the audience */
  approximateCount?: number;
  /** The source of the audience data */
  dataSource?: DataSource;
  deliveryStatus?: DeliveryStatus;
  operationStatus?: OperationStatus;
  timeCreated?: Date;
  timeUpdated?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customAudienceSchema: Schema<CustomAudience> = s.object<CustomAudience>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    subtype: s.optional(s.lazy(() => subtypeSchema)),
    approximateCount: s.optional(s.int()),
    dataSource: s.optional(s.lazy(() => dataSourceSchema)),
    deliveryStatus: s.optional(s.lazy(() => deliveryStatusSchema)),
    operationStatus: s.optional(s.lazy(() => operationStatusSchema)),
    timeCreated: s.optional(s.dateTime()),
    timeUpdated: s.optional(s.dateTime()),
    _keysMap: {
      approximateCount: "approximate_count",
      dataSource: "data_source",
      deliveryStatus: "delivery_status",
      operationStatus: "operation_status",
      timeCreated: "time_created",
      timeUpdated: "time_updated",
    },
  },
  { additionalProperties: s.json() },
);
