import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type UpdateFeatureSummaryDto = {
  /** Auth0 maintainers of the feature */
  maintainers?: string[];
  /** Array of links associated with the feature */
  links?: Link[];
  markdown?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFeatureSummaryDtoSchema: Schema<UpdateFeatureSummaryDto> =
  s.object<UpdateFeatureSummaryDto>(
    {
      maintainers: s.optional(s.array(s.string())),
      links: s.optional(s.array(s.lazy(() => linkSchema))),
      markdown: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
