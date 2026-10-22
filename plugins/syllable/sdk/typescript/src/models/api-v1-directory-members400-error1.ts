import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1DirectoryMembers400Error1 = {
  /** A message describing the invalid request */
  detail: string;
};

export const apiV1DirectoryMembers400Error1Schema: Schema<ApiV1DirectoryMembers400Error1> =
  s.object<ApiV1DirectoryMembers400Error1>({
    detail: s.string(),
  });
