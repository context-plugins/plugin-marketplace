import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessMediaRequest1 = {
  teamId: string;
  mediaName: string;
};

export const apiV1MiscGoogleBusinessMediaRequest1Schema: Schema<ApiV1MiscGoogleBusinessMediaRequest1> =
  s.object<ApiV1MiscGoogleBusinessMediaRequest1>({
    teamId: s.string(),
    mediaName: s.string(),
  });
