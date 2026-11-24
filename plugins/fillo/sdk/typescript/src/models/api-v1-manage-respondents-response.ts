import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { respondentSchema, type Respondent } from "./respondent.js";

export type ApiV1ManageRespondentsResponse = {
  data: Respondent[];
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageRespondentsResponseSchema: Schema<ApiV1ManageRespondentsResponse> =
  s.object<ApiV1ManageRespondentsResponse>(
    {
      data: s.array(s.lazy(() => respondentSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
