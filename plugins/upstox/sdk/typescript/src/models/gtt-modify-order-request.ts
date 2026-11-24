import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gttRuleInternalSchema, gttRuleSchema, type GttRule } from "./gtt-rule.js";
import { typeSchema, type Type } from "./type.js";

export type GttModifyOrderRequest = {
  /**
   * Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order
   * MULTIPLE refers to a multi-leg GTT order
   */
  type: Type;
  /** Quantity with which the order is to be placed */
  quantity: number;
  /** List of rules defining the conditions for each leg in the GTT order */
  rules: GttRule[];
  /** Unique identifier of the GTT order to be modified */
  gttOrderId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gttModifyOrderRequestProperties: s.Shape<GttModifyOrderRequest> = {
  type: typeSchema,
  quantity: s.int(),
  rules: s.array(s.lazy(() => gttRuleInternalSchema)),
  gttOrderId: s.string(),
  _keysMap: {
    gttOrderId: "gtt_order_id",
  },
};

export const gttModifyOrderRequestInternalSchema: Schema<GttModifyOrderRequest> =
  s.object<GttModifyOrderRequest>(gttModifyOrderRequestProperties, { additionalProperties: s.json() });

export const gttModifyOrderRequestSchema: Schema<GttModifyOrderRequest> = s.lazySchema(() =>
  s.object<GttModifyOrderRequest>(
    {
      ...gttModifyOrderRequestProperties,
      rules: s.array(s.lazy(() => gttRuleSchema)),
      gttOrderId: s.string().check(s.pattern("^GTT-.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
