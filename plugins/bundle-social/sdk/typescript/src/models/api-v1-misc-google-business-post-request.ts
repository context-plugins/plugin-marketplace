import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessPostRequest = {
  teamId: string;
  /** The ID of the post in bundle.social */
  postId: string;
};

export const apiV1MiscGoogleBusinessPostRequestSchema: Schema<ApiV1MiscGoogleBusinessPostRequest> =
  s.object<ApiV1MiscGoogleBusinessPostRequest>({
    teamId: s.string(),
    postId: s.string(),
  });
