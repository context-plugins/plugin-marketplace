import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Version = {
  id: string;
  version: number;
  active: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionSchema: Schema<Version> = s.object<Version>(
  {
    id: s.string(),
    version: s.float64(),
    active: s.boolean(),
  },
  { additionalProperties: s.json() },
);
