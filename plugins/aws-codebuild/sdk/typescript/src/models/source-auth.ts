import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type SourceAuth = {
  /**
   * The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.
   */
  type: Type4;
  /** The resource value that applies to the specified authorization type. */
  resource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceAuthSchema: Schema<SourceAuth> = s.object<SourceAuth>(
  {
    type: type4Schema,
    resource: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
