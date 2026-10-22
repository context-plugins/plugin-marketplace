import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of session identifiers */
export type SessionIdList = number[];

export const sessionIdListSchema: Schema<SessionIdList> = s.of<SessionIdList>(s.union([s.array(s.int())]));
