import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Presigned URL to download the session recording, if recording was enabled. Only populated on GET
 * /api/v2/browsers/{session_id}: the upload starts when the browser stops, so it is never ready in
 * the stop response.
 */
export type RecordingUrl = string;

export const recordingUrlSchema: Schema<RecordingUrl> = s.of<RecordingUrl>(s.union([s.string()]));
