import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meApiKey1Schema, type MeApiKey1 } from "./me-api-key1.js";
import { mePlanSchema, type MePlan } from "./me-plan.js";
import { meUserSchema, type MeUser } from "./me-user.js";
import { meWorkspace1Schema, type MeWorkspace1 } from "./me-workspace1.js";

export type MeResponse = {
  apiKey?: MeApiKey1 | null;
  /**
   * Effective dated API version this request was evaluated against, per the `Audioscrape-Version`
   * header / `api_keys.pinned_version` resolution.
   */
  apiVersion: string;
  plan: MePlan;
  user: MeUser;
  /**
   * Workspace this request is scoped to (resolved from the API key or the session's active
   * workspace). List all your workspaces at `/api/workspaces`.
   */
  workspace: MeWorkspace1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meResponseSchema: Schema<MeResponse> = s.object<MeResponse>(
  {
    apiKey: s.optionalNullable(s.lazy(() => meApiKey1Schema)),
    apiVersion: s.string(),
    plan: mePlanSchema,
    user: meUserSchema,
    workspace: meWorkspace1Schema,
    _keysMap: {
      apiKey: "api_key",
      apiVersion: "api_version",
    },
  },
  { additionalProperties: s.json() },
);
