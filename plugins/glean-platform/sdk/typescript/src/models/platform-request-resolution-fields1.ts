import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resolutionTargetSchema, type ResolutionTarget } from "./resolution-target.js";

/** USER and ALL do not have a separate resolution target identifier. */
export type PlatformRequestResolutionFields1 = {
  /** User or organization approval breadth. */
  resolutionTarget: ResolutionTarget;
};

export const platformRequestResolutionFields1Schema: Schema<PlatformRequestResolutionFields1> =
  s.object<PlatformRequestResolutionFields1>({
    resolutionTarget: resolutionTargetSchema,
    _keysMap: {
      resolutionTarget: "resolution_target",
    },
  });
