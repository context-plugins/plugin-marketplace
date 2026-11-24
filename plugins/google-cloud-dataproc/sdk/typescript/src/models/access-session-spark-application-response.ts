import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationInfo1Schema, type ApplicationInfo1 } from "./application-info1.js";

/** A summary of Spark Application */
export type AccessSessionSparkApplicationResponse = {
  /** Output only. High level information corresponding to an application. */
  application?: ApplicationInfo1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSessionSparkApplicationResponseSchema: Schema<AccessSessionSparkApplicationResponse> =
  s.object<AccessSessionSparkApplicationResponse>(
    {
      application: s.optional(s.lazy(() => applicationInfo1Schema)),
    },
    { additionalProperties: s.json() },
  );
