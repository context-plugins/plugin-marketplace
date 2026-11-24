import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  flywheelIterationPropertiesSchema,
  type FlywheelIterationProperties,
} from "./flywheel-iteration-properties.js";

export type ListFlywheelIterationHistoryResponse = {
  /** List of flywheel iteration properties */
  flywheelIterationPropertiesList?: FlywheelIterationProperties[];
  /** Next token */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFlywheelIterationHistoryResponseSchema: Schema<ListFlywheelIterationHistoryResponse> =
  s.object<ListFlywheelIterationHistoryResponse>(
    {
      flywheelIterationPropertiesList: s.optional(s.array(s.lazy(() => flywheelIterationPropertiesSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        flywheelIterationPropertiesList: "FlywheelIterationPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
