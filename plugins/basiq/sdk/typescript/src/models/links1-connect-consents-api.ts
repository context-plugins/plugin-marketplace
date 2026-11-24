import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1ConnectConsentsApi = {
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1ConnectConsentsApiSchema: Schema<Links1ConnectConsentsApi> =
  s.object<Links1ConnectConsentsApi>(
    {
      self: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
