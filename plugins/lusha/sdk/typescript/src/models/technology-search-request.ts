import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TechnologySearchRequest = {
  /** Search text for technology */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const technologySearchRequestSchema: Schema<TechnologySearchRequest> =
  s.object<TechnologySearchRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
