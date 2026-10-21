import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1SessionLabels400Error = {
  /** A message describing the invalid request */
  detail: string;
};

export const apiV1SessionLabels400ErrorSchema: Schema<ApiV1SessionLabels400Error> =
  s.object<ApiV1SessionLabels400Error>({
    detail: s.string(),
  });
