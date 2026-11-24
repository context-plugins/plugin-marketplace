import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalSchema, type Signal } from "./signal.js";

export type ContactSignalsByIdRequest = {
  contactIds: number[];
  signals: Signal[];
  startDate?: string;
  maxResultsPerSignal?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactSignalsByIdRequestProperties: s.Shape<ContactSignalsByIdRequest> = {
  contactIds: s.array(s.int()),
  signals: s.array(s.lazy(() => signalSchema)),
  startDate: s.optional(s.dateOnly()),
  maxResultsPerSignal: s.optional(s.int()),
};

export const contactSignalsByIdRequestInternalSchema: Schema<ContactSignalsByIdRequest> =
  s.object<ContactSignalsByIdRequest>(contactSignalsByIdRequestProperties, {
    additionalProperties: s.json(),
  });

export const contactSignalsByIdRequestSchema: Schema<ContactSignalsByIdRequest> = s.lazySchema(() =>
  s.object<ContactSignalsByIdRequest>(
    {
      ...contactSignalsByIdRequestProperties,
      contactIds: s.array(s.int()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
