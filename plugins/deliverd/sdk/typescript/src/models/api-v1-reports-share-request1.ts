import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audience1InternalSchema, audience1Schema, type Audience1 } from "./unions/audience1.js";

export type ApiV1ReportsShareRequest1 = {
  audience: Audience1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsShareRequest1Properties: s.Shape<ApiV1ReportsShareRequest1> = {
  audience: s.array(s.lazy(() => audience1InternalSchema)),
};

export const apiV1ReportsShareRequest1InternalSchema: Schema<ApiV1ReportsShareRequest1> =
  s.object<ApiV1ReportsShareRequest1>(apiV1ReportsShareRequest1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsShareRequest1Schema: Schema<ApiV1ReportsShareRequest1> = s.lazySchema(() =>
  s.object<ApiV1ReportsShareRequest1>(
    {
      ...apiV1ReportsShareRequest1Properties,
      audience: s.array(s.lazy(() => audience1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
