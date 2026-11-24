import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeRelmCrmPipelinesApiSchema,
  type TypeRelmCrmPipelinesApi,
} from "./type-relm-crm-pipelines-api.js";

export type Stage = {
  id?: string;
  key?: string;
  label?: string;
  ordinal?: number;
  /** Semantic type; default open. */
  type?: TypeRelmCrmPipelinesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageSchema: Schema<Stage> = s.object<Stage>(
  {
    id: s.optional(s.string()),
    key: s.optional(s.string()),
    label: s.optional(s.string()),
    ordinal: s.optional(s.int()),
    type: s.optional(s.lazy(() => typeRelmCrmPipelinesApiSchema)),
  },
  { additionalProperties: s.json() },
);
