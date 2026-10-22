import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1DirectoryMembers400Error = {
  /** A message describing the invalid request */
  detail: string;
};

export const apiV1DirectoryMembers400ErrorSchema: Schema<ApiV1DirectoryMembers400Error> =
  s.object<ApiV1DirectoryMembers400Error>({
    detail: s.string(),
  });
