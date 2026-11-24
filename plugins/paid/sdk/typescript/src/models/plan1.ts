import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planAttributeSchema, type PlanAttribute } from "./plan-attribute.js";
import { planStatusSchema, type PlanStatus } from "./plan-status.js";

export type Plan1 = {
  id: string;
  productId: string;
  name: string | null;
  externalId: string | null;
  supportedCurrencies: string[];
  isDefault: boolean;
  status: PlanStatus;
  upgradePathOrder: number | null;
  archivedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  attributes: PlanAttribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plan1Schema: Schema<Plan1> = s.object<Plan1>(
  {
    id: s.string(),
    productId: s.string(),
    name: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
    supportedCurrencies: s.array(s.string()),
    isDefault: s.boolean(),
    status: planStatusSchema,
    upgradePathOrder: s.nullable(s.float64()),
    archivedAt: s.nullable(s.dateTime()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    attributes: s.array(s.lazy(() => planAttributeSchema)),
  },
  { additionalProperties: s.json() },
);
