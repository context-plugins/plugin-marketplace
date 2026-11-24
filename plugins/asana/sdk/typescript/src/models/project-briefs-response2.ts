import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectBriefsResponse2 = {
  /**
   * An empty object. Some endpoints do not return an object on success. The success is conveyed
   * through a 2-- status code and returning an empty object.
   */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBriefsResponse2Schema: Schema<ProjectBriefsResponse2> = s.object<ProjectBriefsResponse2>(
  {
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
