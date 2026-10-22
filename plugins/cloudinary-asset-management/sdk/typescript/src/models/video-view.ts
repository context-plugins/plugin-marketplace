import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideoView = {
  /** The full public ID of the video. */
  videoPublicId?: string;
  /** The duration in seconds of the video. */
  videoDuration?: number | null;
  /** The transformation applied to the video. */
  videoTransformation?: string | null;
  /** The file extension of the video. */
  videoExtension?: string | null;
  /** The application used to view the video. */
  viewerApplicationName?: string | null;
  /** The 2-digit ISO country code of the viewer location. */
  viewerLocationCountryCode?: string | null;
  /** The full identifier for the viewer's operating system. */
  viewerOsIdentifier?: string | null;
  /** The length of time the video was viewed. */
  viewWatchTime?: number | null;
  /** The date when the video view ended. */
  viewEndedAt?: Date;
};

export const videoViewSchema: Schema<VideoView> = s.object<VideoView>({
  videoPublicId: s.optional(s.string()),
  videoDuration: s.optionalNullable(s.float64()),
  videoTransformation: s.optionalNullable(s.string()),
  videoExtension: s.optionalNullable(s.string()),
  viewerApplicationName: s.optionalNullable(s.string()),
  viewerLocationCountryCode: s.optionalNullable(s.string()),
  viewerOsIdentifier: s.optionalNullable(s.string()),
  viewWatchTime: s.optionalNullable(s.float64()),
  viewEndedAt: s.optional(s.dateTime()),
  _keysMap: {
    videoPublicId: "video_public_id",
    videoDuration: "video_duration",
    videoTransformation: "video_transformation",
    videoExtension: "video_extension",
    viewerApplicationName: "viewer_application_name",
    viewerLocationCountryCode: "viewer_location_country_code",
    viewerOsIdentifier: "viewer_os_identifier",
    viewWatchTime: "view_watch_time",
    viewEndedAt: "view_ended_at",
  },
});
