import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field2Schema, type Field2 } from "./field2.js";

export type ApiV1MiscGoogleBusinessLocationServiceListRequest = {
  teamId: string;
  fields: Field2[];
  serviceItems?: Record<string, unknown>[] | null;
};

const apiV1MiscGoogleBusinessLocationServiceListRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationServiceListRequest> =
  {
    teamId: s.string(),
    fields: s.array(s.lazy(() => field2Schema)),
    serviceItems: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  };

export const apiV1MiscGoogleBusinessLocationServiceListRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationServiceListRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationServiceListRequest>(
    apiV1MiscGoogleBusinessLocationServiceListRequestProperties,
  );

export const apiV1MiscGoogleBusinessLocationServiceListRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationServiceListRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationServiceListRequest>({
      ...apiV1MiscGoogleBusinessLocationServiceListRequestProperties,
      fields: s.array(s.lazy(() => field2Schema)).check(s.minLength(1), s.maxLength(1)),
    }),
  );
