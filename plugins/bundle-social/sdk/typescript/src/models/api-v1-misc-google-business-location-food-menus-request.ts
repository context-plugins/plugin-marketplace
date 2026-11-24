import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field4Schema, type Field4 } from "./field4.js";

export type ApiV1MiscGoogleBusinessLocationFoodMenusRequest = {
  teamId: string;
  fields: Field4[];
  menus?: Record<string, unknown>[] | null;
};

const apiV1MiscGoogleBusinessLocationFoodMenusRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationFoodMenusRequest> =
  {
    teamId: s.string(),
    fields: s.array(s.lazy(() => field4Schema)),
    menus: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
  };

export const apiV1MiscGoogleBusinessLocationFoodMenusRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationFoodMenusRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationFoodMenusRequest>(
    apiV1MiscGoogleBusinessLocationFoodMenusRequestProperties,
  );

export const apiV1MiscGoogleBusinessLocationFoodMenusRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationFoodMenusRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationFoodMenusRequest>({
      ...apiV1MiscGoogleBusinessLocationFoodMenusRequestProperties,
      fields: s.array(s.lazy(() => field4Schema)).check(s.minLength(1), s.maxLength(1)),
    }),
  );
