import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpoApplyData = {
  /**
   * Application id created for this IPO application. Pass this as order_id to the get-order and
   * cancel-order APIs
   */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoApplyDataSchema: Schema<IpoApplyData> = s.object<IpoApplyData>(
  {
    orderId: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
