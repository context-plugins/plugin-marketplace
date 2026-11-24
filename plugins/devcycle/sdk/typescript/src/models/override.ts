import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Override = {
  project: string;
  environment: string;
  feature: string;
  variation: string;
  dvcUserId: string;
  createdAt: number;
  updatedAt: number;
  a0User?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const overrideSchema: Schema<Override> = s.object<Override>(
  {
    project: s.string(),
    environment: s.string(),
    feature: s.string(),
    variation: s.string(),
    dvcUserId: s.string(),
    createdAt: s.float64(),
    updatedAt: s.float64(),
    a0User: s.optional(s.string()),
    _keysMap: {
      project: "_project",
      environment: "_environment",
      feature: "_feature",
      variation: "_variation",
      a0User: "a0_user",
    },
  },
  { additionalProperties: s.json() },
);
