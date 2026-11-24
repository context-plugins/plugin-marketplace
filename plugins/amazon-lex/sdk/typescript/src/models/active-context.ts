import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActiveContext = {
  /** The name of active context. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeContextSchema: Schema<ActiveContext> = s.object<ActiveContext>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
