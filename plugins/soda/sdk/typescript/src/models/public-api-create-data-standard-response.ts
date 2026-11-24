import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataStandardContentDtoSchema, type DataStandardContentDto } from "./data-standard-content-dto.js";

export type PublicApiCreateDataStandardResponse = {
  dataStandard?: DataStandardContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateDataStandardResponseSchema: Schema<PublicApiCreateDataStandardResponse> =
  s.object<PublicApiCreateDataStandardResponse>(
    {
      dataStandard: s.optional(s.lazy(() => dataStandardContentDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
