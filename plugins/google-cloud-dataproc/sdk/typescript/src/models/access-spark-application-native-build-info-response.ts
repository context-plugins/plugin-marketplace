import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nativeBuildInfoUiData2Schema, type NativeBuildInfoUiData2 } from "./native-build-info-ui-data2.js";

/** Details of Native Build Info for a Spark Application */
export type AccessSparkApplicationNativeBuildInfoResponse = {
  /** Native Build Info Data */
  buildInfo?: NativeBuildInfoUiData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationNativeBuildInfoResponseSchema: Schema<AccessSparkApplicationNativeBuildInfoResponse> =
  s.object<AccessSparkApplicationNativeBuildInfoResponse>(
    {
      buildInfo: s.optional(s.lazy(() => nativeBuildInfoUiData2Schema)),
    },
    { additionalProperties: s.json() },
  );
