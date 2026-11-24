import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  submittedComposeServiceInternalSchema,
  submittedComposeServiceSchema,
  type SubmittedComposeService,
} from "./submitted-compose-service.js";

/** Normalized Compose document transported with a hosted runtime artifact. */
export type SubmittedComposeDocument = {
  services: Record<string, SubmittedComposeService>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedComposeDocumentProperties: s.Shape<SubmittedComposeDocument> = {
  services: s.record(
    s.string(),
    s.lazy(() => submittedComposeServiceInternalSchema),
  ),
};

export const submittedComposeDocumentInternalSchema: Schema<SubmittedComposeDocument> =
  s.object<SubmittedComposeDocument>(submittedComposeDocumentProperties, { additionalProperties: s.json() });

export const submittedComposeDocumentSchema: Schema<SubmittedComposeDocument> = s.lazySchema(() =>
  s.object<SubmittedComposeDocument>(
    {
      ...submittedComposeDocumentProperties,
      services: s
        .record(
          s.string(),
          s.lazy(() => submittedComposeServiceSchema),
        )
        .check(s.minProperties(1)),
    },
    { additionalProperties: s.json() },
  ),
);
