import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { daoToolResponseSchema, type DaoToolResponse } from "../dao-tool-response.js";

/** The session end tool associated with the prompt */
export type SessionEndTool = DaoToolResponse;

export const sessionEndToolSchema: Schema<SessionEndTool> = s.of<SessionEndTool>(
  s.union([s.lazy(() => daoToolResponseSchema)]),
);
