import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resolutionTarget1Schema, type ResolutionTarget1 } from "./resolution-target1.js";

/** GROUP and DEPARTMENT require their corresponding identifier. */
export type PlatformRequestResolutionFields2 = {
  /** Group or department approval breadth. */
  resolutionTarget: ResolutionTarget1;
  /** Canonical IdP group ID or explicit department name. */
  resolutionTargetId: Record<string, unknown>;
};

export const platformRequestResolutionFields2Schema: Schema<PlatformRequestResolutionFields2> =
  s.object<PlatformRequestResolutionFields2>({
    resolutionTarget: resolutionTarget1Schema,
    resolutionTargetId: s.record(s.string(), s.unknown()),
    _keysMap: {
      resolutionTarget: "resolution_target",
      resolutionTargetId: "resolution_target_id",
    },
  });
