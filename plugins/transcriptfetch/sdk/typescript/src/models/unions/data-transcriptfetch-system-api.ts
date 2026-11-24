import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { meDataSchema, type MeData } from "../me-data.js";
import {
  transcriptDataInternalSchema,
  transcriptDataSchema,
  type TranscriptData,
} from "../transcript-data.js";
import { videoListDataSchema, type VideoListData } from "../video-list-data.js";

export type DataTranscriptfetchSystemApi = TranscriptData | VideoListData | MeData;

export const dataTranscriptfetchSystemApiInternalSchema: Schema<DataTranscriptfetchSystemApi> =
  s.of<DataTranscriptfetchSystemApi>(
    s.union([
      s.lazy(() => transcriptDataInternalSchema),
      s.lazy(() => videoListDataSchema),
      s.lazy(() => meDataSchema),
    ]),
  );

export const dataTranscriptfetchSystemApiSchema: Schema<DataTranscriptfetchSystemApi> = s.lazySchema(() =>
  s.of<DataTranscriptfetchSystemApi>(
    s.union([
      s.lazy(() => transcriptDataSchema),
      s.lazy(() => videoListDataSchema),
      s.lazy(() => meDataSchema),
    ]),
  ),
);
