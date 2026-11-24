import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureSummary = {
  /** Auth0 maintainers of this feature */
  maintainers: string[];
  links: Link[];
  markdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureSummarySchema: Schema<FeatureSummary> = s.object<FeatureSummary>(
  {
    maintainers: s.array(s.string()),
    links: s.array(s.lazy(() => linkSchema)),
    markdown: s.string(),
  },
  { additionalProperties: s.json() },
);
