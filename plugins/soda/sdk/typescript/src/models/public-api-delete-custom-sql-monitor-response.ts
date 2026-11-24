import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteCustomSqlMonitorResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteCustomSqlMonitorResponseSchema: Schema<PublicApiDeleteCustomSqlMonitorResponse> =
  s.object<PublicApiDeleteCustomSqlMonitorResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
