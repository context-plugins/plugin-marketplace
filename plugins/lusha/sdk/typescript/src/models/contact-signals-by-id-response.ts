import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSignalDataSchema, type ContactSignalData } from "./contact-signal-data.js";

export type ContactSignalsByIdResponse = {
  contacts?: Record<string, ContactSignalData>;
  endDate?: string;
  startDate?: string;
  creditCharged?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSignalsByIdResponseSchema: Schema<ContactSignalsByIdResponse> =
  s.object<ContactSignalsByIdResponse>(
    {
      contacts: s.optional(
        s.record(
          s.string(),
          s.lazy(() => contactSignalDataSchema),
        ),
      ),
      endDate: s.optional(s.dateOnly()),
      startDate: s.optional(s.dateOnly()),
      creditCharged: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
