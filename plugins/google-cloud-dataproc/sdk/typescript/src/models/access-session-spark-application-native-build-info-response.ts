import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nativeBuildInfoUiData3Schema, type NativeBuildInfoUiData3 } from "./native-build-info-ui-data3.js";

/** Details of a native build info for a Spark Application */
export type AccessSessionSparkApplicationNativeBuildInfoResponse = {
  /** Native SQL Execution Data */
  executionData?: NativeBuildInfoUiData3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSessionSparkApplicationNativeBuildInfoResponseSchema: Schema<AccessSessionSparkApplicationNativeBuildInfoResponse> =
  s.object<AccessSessionSparkApplicationNativeBuildInfoResponse>(
    {
      executionData: s.optional(s.lazy(() => nativeBuildInfoUiData3Schema)),
    },
    { additionalProperties: s.json() },
  );
