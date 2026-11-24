import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderLineTypeSchema, type OrderLineType } from "./order-line-type.js";

export type OrderLine1 = {
  id: string;
  productId: string;
  name: string;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  lineType: OrderLineType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLine1Schema: Schema<OrderLine1> = s.object<OrderLine1>(
  {
    id: s.string(),
    productId: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    startDate: s.dateTime(),
    endDate: s.nullable(s.dateTime()),
    lineType: orderLineTypeSchema,
  },
  { additionalProperties: s.json() },
);
