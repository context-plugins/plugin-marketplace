import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstanceStartResponse = {
  /** Unique identifier of the created instance */
  instanceId: string;
  /** Human-readable status message */
  message: string;
  /** URL to livestream the instance */
  livestreamUrl: string;
  /** State of the instance (running, pending, hibernated, terminated) */
  state: string;
};

export const instanceStartResponseSchema: Schema<InstanceStartResponse> = s.object<InstanceStartResponse>({
  instanceId: s.string(),
  message: s.string(),
  livestreamUrl: s.string(),
  state: s.string(),
  _keysMap: {
    instanceId: "instance_id",
    livestreamUrl: "livestream_url",
  },
});
