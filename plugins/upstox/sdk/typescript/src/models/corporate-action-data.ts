import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  corporateActionEventDetailSchema,
  type CorporateActionEventDetail,
} from "./corporate-action-event-detail.js";

export type CorporateActionData = {
  /** Type of corporate action */
  name?: string;
  /** Ex-date or expiry date of the action */
  expiryDate?: string;
  /** Amount associated with the action */
  amount?: number;
  /** Ratio for bonus or split actions */
  ratio?: string;
  /** Detailed event fields for the corporate action */
  eventDetails?: CorporateActionEventDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const corporateActionDataSchema: Schema<CorporateActionData> = s.object<CorporateActionData>(
  {
    name: s.optional(s.string()),
    expiryDate: s.optional(s.string()),
    amount: s.optional(s.float64()),
    ratio: s.optional(s.string()),
    eventDetails: s.optional(s.array(s.lazy(() => corporateActionEventDetailSchema))),
    _keysMap: {
      expiryDate: "expiry_date",
      eventDetails: "event_details",
    },
  },
  { additionalProperties: s.json() },
);
