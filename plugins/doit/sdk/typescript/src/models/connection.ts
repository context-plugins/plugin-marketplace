import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Connection = {
  key: string;
  /** Cloud provider the bound connection must have (e.g. `amazon-web-services`). */
  provider: string;
  /** The source connection's display name, as a matching hint. */
  name: string;
  usedByNodes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionSchema: Schema<Connection> = s.object<Connection>(
  {
    key: s.string(),
    provider: s.string(),
    name: s.string(),
    usedByNodes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
