import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudIncidentListItemSchema, type CloudIncidentListItem } from "./cloud-incident-list-item.js";

export type CoreV1CloudincidentsResponse = {
  /** Array of cloud incidents */
  incidents?: CloudIncidentListItem[];
  /** Page token, returned by a previous call, to request the next page of results */
  pageToken?: string;
  /** Cloud incidents rows count */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coreV1CloudincidentsResponseSchema: Schema<CoreV1CloudincidentsResponse> =
  s.object<CoreV1CloudincidentsResponse>(
    {
      incidents: s.optional(s.array(s.lazy(() => cloudIncidentListItemSchema))),
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
