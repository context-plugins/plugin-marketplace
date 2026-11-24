import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationFoodMenus403Error = {
  statusCode?: number | null;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationFoodMenus403ErrorSchema: Schema<ApiV1MiscGoogleBusinessLocationFoodMenus403Error> =
  s.object<ApiV1MiscGoogleBusinessLocationFoodMenus403Error>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
