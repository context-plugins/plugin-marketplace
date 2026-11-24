import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { attachedfileidsSchema, type Attachedfileids } from "./unions/attachedfileids.js";
import { errorSchema, type Error } from "./unions/error.js";
import { judgementSchema, type Judgement } from "./unions/judgement.js";
import { modelparamsSchema, type Modelparams } from "./unions/modelparams.js";
import { outputSchema, type Output } from "./unions/output.js";
import { outputschemaSchema, type Outputschema } from "./unions/outputschema.js";
import { resultSchema, type Result } from "./unions/result.js";
import { titleSchema, type Title } from "./unions/title.js";
import { workspaceidSchema, type Workspaceid } from "./unions/workspaceid.js";

export type RunSummary = {
  id: string;
  task: string;
  title: Title;
  model: string;
  modelParams?: Modelparams;
  contextLimit: number;
  status: Status;
  result: Result;
  output?: Output;
  outputSchema?: Outputschema;
  error: Error;
  sessionId: string;
  workspaceId: Workspaceid;
  attachedFileIds?: Attachedfileids;
  judgement?: Judgement;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalCostUsd: string;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runSummarySchema: Schema<RunSummary> = s.object<RunSummary>(
  {
    id: s.string(),
    task: s.string(),
    title: titleSchema,
    model: s.string(),
    modelParams: s.optional(s.lazy(() => modelparamsSchema)),
    contextLimit: s.int(),
    status: statusSchema,
    result: resultSchema,
    output: s.optional(s.lazy(() => outputSchema)),
    outputSchema: s.optional(s.lazy(() => outputschemaSchema)),
    error: errorSchema,
    sessionId: s.string(),
    workspaceId: workspaceidSchema,
    attachedFileIds: s.optional(s.lazy(() => attachedfileidsSchema)),
    judgement: s.optional(s.lazy(() => judgementSchema)),
    totalInputTokens: s.int(),
    totalOutputTokens: s.int(),
    totalCostUsd: s.string(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
