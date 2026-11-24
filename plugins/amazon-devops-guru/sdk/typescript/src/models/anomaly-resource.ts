import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnomalyResource = {
  /** The name of the Amazon Web Services resource. */
  name?: string;
  /** The type of the Amazon Web Services resource. */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyResourceSchema: Schema<AnomalyResource> = s.object<AnomalyResource>(
  {
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
