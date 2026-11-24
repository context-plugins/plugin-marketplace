import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiRcaLineageEdgeDto = {
  from: string;
  to: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaLineageEdgeDtoSchema: Schema<PublicApiRcaLineageEdgeDto> =
  s.object<PublicApiRcaLineageEdgeDto>(
    {
      from: s.string(),
      to: s.string(),
    },
    { additionalProperties: s.json() },
  );
