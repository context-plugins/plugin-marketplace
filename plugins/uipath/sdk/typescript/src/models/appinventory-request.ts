import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationSchema, type Application } from "./application.js";

export type AppinventoryRequest = {
  applications?: Application[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appinventoryRequestSchema: Schema<AppinventoryRequest> = s.object<AppinventoryRequest>(
  {
    applications: s.optional(s.array(s.lazy(() => applicationSchema))),
  },
  { additionalProperties: s.json() },
);
