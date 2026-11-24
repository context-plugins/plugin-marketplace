import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { format1Schema, type Format1 } from "./format1.js";

export type Data = {
  endpointCount: number;
  format: Format1;
  projectId: string;
  schemaCount: number;
  testCount: number;
  textSectionCount: number;
  traitCount: number;
  versionId: string;
  workspaceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    endpointCount: s.float64(),
    format: format1Schema,
    projectId: s.string(),
    schemaCount: s.float64(),
    testCount: s.float64(),
    textSectionCount: s.float64(),
    traitCount: s.float64(),
    versionId: s.string(),
    workspaceId: s.string(),
  },
  { additionalProperties: s.json() },
);
