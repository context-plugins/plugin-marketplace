import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orgAccessWriteSchema, type OrgAccessWrite } from "./org-access-write.js";

export type OrgsAccessRequest = {
  delta: OrgAccessWrite;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgsAccessRequestSchema: Schema<OrgsAccessRequest> = s.object<OrgsAccessRequest>(
  {
    delta: orgAccessWriteSchema,
  },
  { additionalProperties: s.json() },
);
