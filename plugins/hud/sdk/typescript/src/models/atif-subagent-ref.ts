import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { sessionIdSchema, type SessionId } from "./unions/session-id.js";
import { trajectoryIdSchema, type TrajectoryId } from "./unions/trajectory-id.js";
import { trajectoryPathSchema, type TrajectoryPath } from "./unions/trajectory-path.js";

export type AtifSubagentRef = {
  trajectoryId?: TrajectoryId;
  sessionId?: SessionId;
  trajectoryPath?: TrajectoryPath;
  extra?: Extra;
};

export const atifSubagentRefSchema: Schema<AtifSubagentRef> = s.object<AtifSubagentRef>({
  trajectoryId: s.optional(s.lazy(() => trajectoryIdSchema)),
  sessionId: s.optional(s.lazy(() => sessionIdSchema)),
  trajectoryPath: s.optional(s.lazy(() => trajectoryPathSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    trajectoryId: "trajectory_id",
    sessionId: "session_id",
    trajectoryPath: "trajectory_path",
  },
});
