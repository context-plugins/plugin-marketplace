import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusCodeSchema, type StatusCode } from "./status-code.js";

export type ResponseInstagramGraphPublishingApi = {
  id?: string;
  statusCode?: StatusCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseInstagramGraphPublishingApiSchema: Schema<ResponseInstagramGraphPublishingApi> =
  s.object<ResponseInstagramGraphPublishingApi>(
    {
      id: s.optional(s.string()),
      statusCode: s.optional(s.lazy(() => statusCodeSchema)),
      _keysMap: {
        statusCode: "status_code",
      },
    },
    { additionalProperties: s.json() },
  );
