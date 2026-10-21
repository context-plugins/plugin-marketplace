import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assignedAtSchema, type AssignedAt } from "./unions/assigned-at.js";
import { filesSchema, type Files } from "./unions/files.js";

export type InstanceStatusResponse = {
  instanceId: string;
  /** Current state of the instance */
  state: string;
  /** Timeout in minutes before instance auto-termination */
  timeout: number;
  /** Minutes used by the instance so far */
  usedMinutes: number;
  /** Current knowledge of the instance */
  knowledge: string;
  /** URL to livestream the instance */
  livestreamUrl: string;
  /** When the instance was assigned */
  assignedAt?: AssignedAt;
  /** Files on the instance organized by type (downloads, uploads) */
  files?: Files;
};

export const instanceStatusResponseSchema: Schema<InstanceStatusResponse> = s.object<InstanceStatusResponse>({
  instanceId: s.string(),
  state: s.string(),
  timeout: s.int(),
  usedMinutes: s.int(),
  knowledge: s.string(),
  livestreamUrl: s.string(),
  assignedAt: s.optional(s.lazy(() => assignedAtSchema)),
  files: s.optional(s.lazy(() => filesSchema)),
  _keysMap: {
    instanceId: "instance_id",
    usedMinutes: "used_minutes",
    livestreamUrl: "livestream_url",
    assignedAt: "assigned_at",
  },
});
