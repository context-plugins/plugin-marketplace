import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetails4Schema, type AchDetails4 } from "./ach-details4.js";
import { clearing3Schema, type Clearing3 } from "./clearing3.js";
import { itemSchema, type Item } from "./item.js";
import { links35Schema, type Links35 } from "./links35.js";

export type MassPaymentsRequest = {
  links: Links35;
  items: Item[];
  status?: string;
  achDetails?: AchDetails4;
  clearing?: Clearing3;
  metadata?: Record<string, unknown>;
  correlationId?: string;
};

export const massPaymentsRequestSchema: Schema<MassPaymentsRequest> = s.object<MassPaymentsRequest>({
  links: links35Schema,
  items: s.array(s.lazy(() => itemSchema)),
  status: s.optional(s.string()),
  achDetails: s.optional(s.lazy(() => achDetails4Schema)),
  clearing: s.optional(s.lazy(() => clearing3Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  correlationId: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
