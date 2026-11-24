import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebsitereadabilityRequest = {
  /** The URL of the web page to analyze */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebsitereadabilityRequestSchema: Schema<V1WebsitereadabilityRequest> =
  s.object<V1WebsitereadabilityRequest>(
    {
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
