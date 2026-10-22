import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyTaskSchemaResponse = {
  schema: string;
  type: string;
  properties: Record<string, Record<string, unknown>>;
  required: string[];
};

export const journeyTaskSchemaResponseSchema: Schema<JourneyTaskSchemaResponse> =
  s.object<JourneyTaskSchemaResponse>({
    schema: s.string(),
    type: s.string(),
    properties: s.record(s.string(), s.record(s.string(), s.unknown())),
    required: s.array(s.string()),
    _keysMap: {
      schema: "$schema",
    },
  });
