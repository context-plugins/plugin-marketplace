import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartProjectVersionRequest = {
  /** The Amazon Resource Name(ARN) of the model version that you want to start. */
  projectVersionArn: string;
  /**
   * The minimum number of inference units to use. A single inference unit represents 1 hour of
   * processing. Use a higher number to increase the TPS throughput of your model. You are charged
   * for the number of inference units that you use.
   */
  minInferenceUnits: number;
  /**
   * The maximum number of inference units to use for auto-scaling the model. If you don't specify a
   * value, Amazon Rekognition Custom Labels doesn't auto-scale the model.
   */
  maxInferenceUnits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startProjectVersionRequestSchema: Schema<StartProjectVersionRequest> =
  s.object<StartProjectVersionRequest>(
    {
      projectVersionArn: s.string(),
      minInferenceUnits: s.int(),
      maxInferenceUnits: s.optional(s.int()),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
        minInferenceUnits: "MinInferenceUnits",
        maxInferenceUnits: "MaxInferenceUnits",
      },
    },
    { additionalProperties: s.json() },
  );
