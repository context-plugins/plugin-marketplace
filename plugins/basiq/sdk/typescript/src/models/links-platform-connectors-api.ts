import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** institution logo resource links */
export type LinksPlatformConnectorsApi = {
  /** URL to full size logo */
  full: string;
  /** Square formatted logo URL */
  square: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksPlatformConnectorsApiSchema: Schema<LinksPlatformConnectorsApi> =
  s.object<LinksPlatformConnectorsApi>(
    {
      full: s.string(),
      square: s.string(),
    },
    { additionalProperties: s.json() },
  );
