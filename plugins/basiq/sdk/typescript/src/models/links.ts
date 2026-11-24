import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links = {
  /** Public URL of auth link. */
  public: string;
  /** URL of the resource */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksSchema: Schema<Links> = s.object<Links>(
  {
    public: s.string(),
    self: s.string(),
  },
  { additionalProperties: s.json() },
);
