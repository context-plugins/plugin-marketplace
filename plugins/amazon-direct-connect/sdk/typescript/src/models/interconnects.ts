import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interconnectSchema, type Interconnect } from "./interconnect.js";

export type Interconnects = {
  /** The interconnects. */
  interconnects?: Interconnect[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const interconnectsSchema: Schema<Interconnects> = s.object<Interconnects>(
  {
    interconnects: s.optional(s.array(s.lazy(() => interconnectSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
