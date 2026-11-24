import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  softwareConfigurationSummarySchema,
  type SoftwareConfigurationSummary,
} from "./software-configuration-summary.js";

export type SoftwareConfigurationRecordsResponse = {
  softwareConfigurationList?: SoftwareConfigurationSummary[];
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const softwareConfigurationRecordsResponseSchema: Schema<SoftwareConfigurationRecordsResponse> =
  s.object<SoftwareConfigurationRecordsResponse>(
    {
      softwareConfigurationList: s.optional(s.array(s.lazy(() => softwareConfigurationSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
