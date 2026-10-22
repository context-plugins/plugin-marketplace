import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The response from the agent */
export type Response = Record<string, unknown>;

export const responseSchema: Schema<Response> = s.of<Response>(s.union([s.record(s.string(), s.unknown())]));
