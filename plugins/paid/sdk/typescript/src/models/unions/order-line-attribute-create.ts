import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OrderLineAttributeCreate = Record<string, unknown>;

export const orderLineAttributeCreateSchema: Schema<OrderLineAttributeCreate> =
  s.of<OrderLineAttributeCreate>(s.union([s.record(s.string(), s.unknown())]));
