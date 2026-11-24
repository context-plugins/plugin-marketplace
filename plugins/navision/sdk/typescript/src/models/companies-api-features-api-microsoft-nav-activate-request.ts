import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesApiFeaturesApiMicrosoftNavActivateRequest = {
  /** @default false */
  updateInBackground?: boolean;
  startDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiFeaturesApiMicrosoftNavActivateRequestSchema: Schema<CompaniesApiFeaturesApiMicrosoftNavActivateRequest> =
  s.object<CompaniesApiFeaturesApiMicrosoftNavActivateRequest>(
    {
      updateInBackground: s.defaulted(s.boolean(), false),
      startDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
