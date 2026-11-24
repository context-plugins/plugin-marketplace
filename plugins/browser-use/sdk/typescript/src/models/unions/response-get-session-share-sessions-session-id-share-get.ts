import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sessionShareInfoSchema, type SessionShareInfo } from "../session-share-info.js";

export type ResponseGetSessionShareSessionsSessionIdShareGet = SessionShareInfo;

export const responseGetSessionShareSessionsSessionIdShareGetSchema: Schema<ResponseGetSessionShareSessionsSessionIdShareGet> =
  s.of<ResponseGetSessionShareSessionsSessionIdShareGet>(s.union([s.lazy(() => sessionShareInfoSchema)]));
