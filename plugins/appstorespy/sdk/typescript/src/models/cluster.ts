import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Cluster = {
  type: string;
  title: string;
  items: string[];
  layout: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterSchema: Schema<Cluster> = s.object<Cluster>(
  {
    type: s.string(),
    title: s.string(),
    items: s.array(s.string()),
    layout: s.string(),
  },
  { additionalProperties: s.json() },
);
