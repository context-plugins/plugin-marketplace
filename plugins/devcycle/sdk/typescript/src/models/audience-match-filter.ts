import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { comparator5Schema, type Comparator5 } from "./comparator5.js";

export type AudienceMatchFilter = {
  /** @default "audienceMatch" */
  type?: "audienceMatch";
  comparator?: Comparator5;
  audiences?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audienceMatchFilterSchema: Schema<AudienceMatchFilter> = s.object<AudienceMatchFilter>(
  {
    type: s.defaulted(s.literal("audienceMatch"), "audienceMatch"),
    comparator: s.optional(s.lazy(() => comparator5Schema)),
    audiences: s.optional(s.array(s.string())),
    _keysMap: {
      audiences: "_audiences",
    },
  },
  { additionalProperties: s.json() },
);
