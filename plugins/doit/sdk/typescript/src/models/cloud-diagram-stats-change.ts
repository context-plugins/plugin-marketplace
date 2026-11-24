import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

/** A single activity change entry in a diagram stats record. */
export type CloudDiagramStatsChange = {
  /** Type of the change. */
  type?: Type8;
  /** Cloud service the change applies to. */
  service?: string;
  /** Number of occurrences of this change type. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramStatsChangeSchema: Schema<CloudDiagramStatsChange> =
  s.object<CloudDiagramStatsChange>(
    {
      type: s.optional(s.lazy(() => type8Schema)),
      service: s.optional(s.string()),
      count: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
