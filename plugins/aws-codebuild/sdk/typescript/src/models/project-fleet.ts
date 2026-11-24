import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectFleet = {
  /** Specifies the compute fleet ARN for the build project. */
  fleetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectFleetSchema: Schema<ProjectFleet> = s.object<ProjectFleet>(
  {
    fleetArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
