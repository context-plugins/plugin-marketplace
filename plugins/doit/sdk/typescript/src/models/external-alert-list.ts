import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertListItemInternalSchema, alertListItemSchema, type AlertListItem } from "./alert-list-item.js";

/** List of alerts. */
export type ExternalAlertList = {
  /** Page token. It is used to request a specific page of the list results. */
  pageToken?: string;
  /** The number of returned records. */
  rowCount?: number;
  /** Array of alerts. */
  alerts?: AlertListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const externalAlertListProperties: s.Shape<ExternalAlertList> = {
  pageToken: s.optional(s.string()),
  rowCount: s.optional(s.int()),
  alerts: s.optional(s.array(s.lazy(() => alertListItemInternalSchema))),
};

export const externalAlertListInternalSchema: Schema<ExternalAlertList> = s.object<ExternalAlertList>(
  externalAlertListProperties,
  { additionalProperties: s.json() },
);

export const externalAlertListSchema: Schema<ExternalAlertList> = s.lazySchema(() =>
  s.object<ExternalAlertList>(
    {
      ...externalAlertListProperties,
      alerts: s.optional(s.array(s.lazy(() => alertListItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
