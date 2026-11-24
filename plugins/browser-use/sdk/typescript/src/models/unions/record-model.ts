import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Record the browser session to an mp4, retrievable via GET /browsers/{id} once the browser stops.
 * API runs default to off; pass true to enable. Like other browser settings, this only applies when
 * a new browser is provisioned: a follow-up that reuses the session's live browser keeps that
 * browser's recording state. Ignored (always off) for Zero Data Retention projects.
 */
export type RecordModel = boolean;

export const recordModelSchema: Schema<RecordModel> = s.of<RecordModel>(s.union([s.boolean()]));
