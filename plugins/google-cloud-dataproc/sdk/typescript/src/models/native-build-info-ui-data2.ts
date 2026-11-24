import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildInfoSchema, type BuildInfo } from "./build-info.js";

/** Native Build Info Data */
export type NativeBuildInfoUiData2 = {
  /** Optional. Build related details. */
  buildInfo?: BuildInfo[];
  /** Optional. Build class of Native. */
  buildClass?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nativeBuildInfoUiData2Schema: Schema<NativeBuildInfoUiData2> = s.object<NativeBuildInfoUiData2>(
  {
    buildInfo: s.optional(s.array(s.lazy(() => buildInfoSchema))),
    buildClass: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
