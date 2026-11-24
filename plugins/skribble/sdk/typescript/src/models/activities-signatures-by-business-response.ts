import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activitiesSignaturesByBusinessEntryInternalSchema,
  activitiesSignaturesByBusinessEntrySchema,
  type ActivitiesSignaturesByBusinessEntry,
} from "./activities-signatures-by-business-entry.js";

/** Paginated list of signature activities for the business. */
export type ActivitiesSignaturesByBusinessResponse = {
  totalPages?: number;
  totalItems?: number;
  currentPage?: number;
  size?: number;
  activities?: ActivitiesSignaturesByBusinessEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const activitiesSignaturesByBusinessResponseProperties: s.Shape<ActivitiesSignaturesByBusinessResponse> = {
  totalPages: s.optional(s.int()),
  totalItems: s.optional(s.int()),
  currentPage: s.optional(s.int()),
  size: s.optional(s.int()),
  activities: s.optional(s.array(s.lazy(() => activitiesSignaturesByBusinessEntryInternalSchema))),
  _keysMap: {
    totalPages: "total_pages",
    totalItems: "total_items",
    currentPage: "current_page",
  },
};

export const activitiesSignaturesByBusinessResponseInternalSchema: Schema<ActivitiesSignaturesByBusinessResponse> =
  s.object<ActivitiesSignaturesByBusinessResponse>(activitiesSignaturesByBusinessResponseProperties, {
    additionalProperties: s.json(),
  });

export const activitiesSignaturesByBusinessResponseSchema: Schema<ActivitiesSignaturesByBusinessResponse> =
  s.lazySchema(() =>
    s.object<ActivitiesSignaturesByBusinessResponse>(
      {
        ...activitiesSignaturesByBusinessResponseProperties,
        activities: s.optional(s.array(s.lazy(() => activitiesSignaturesByBusinessEntrySchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
