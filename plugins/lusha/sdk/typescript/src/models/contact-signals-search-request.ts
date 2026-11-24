import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contactLushaSignalsApiInternalSchema,
  contactLushaSignalsApiSchema,
  type ContactLushaSignalsApi,
} from "./contact-lusha-signals-api.js";
import { signalSchema, type Signal } from "./signal.js";

export type ContactSignalsSearchRequest = {
  contacts: ContactLushaSignalsApi[];
  signals: Signal[];
  startDate?: string;
  maxResultsPerSignal?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactSignalsSearchRequestProperties: s.Shape<ContactSignalsSearchRequest> = {
  contacts: s.array(s.lazy(() => contactLushaSignalsApiInternalSchema)),
  signals: s.array(s.lazy(() => signalSchema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
};

export const contactSignalsSearchRequestInternalSchema: Schema<ContactSignalsSearchRequest> =
  s.object<ContactSignalsSearchRequest>(contactSignalsSearchRequestProperties, {
    additionalProperties: s.json(),
  });

export const contactSignalsSearchRequestSchema: Schema<ContactSignalsSearchRequest> = s.lazySchema(() =>
  s.object<ContactSignalsSearchRequest>(
    {
      ...contactSignalsSearchRequestProperties,
      contacts: s.array(s.lazy(() => contactLushaSignalsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
