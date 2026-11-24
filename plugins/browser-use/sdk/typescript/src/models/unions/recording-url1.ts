import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Presigned URL to download the session recording. Only populated on `GET /api/v2/browsers/{id}`;
 * always `null` in list responses.
 */
export type RecordingUrl1 = string;

export const recordingUrl1Schema: Schema<RecordingUrl1> = s.of<RecordingUrl1>(s.union([s.string()]));
