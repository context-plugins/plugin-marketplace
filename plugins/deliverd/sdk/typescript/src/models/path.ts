import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Path = {
  id: string;
  title: string;
  kind: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pathSchema: Schema<Path> = s.object<Path>(
  {
    id: s.string(),
    title: s.string(),
    kind: s.string(),
  },
  { additionalProperties: s.json() },
);
