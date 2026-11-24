import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addMembersRequestSchema, type AddMembersRequest } from "./add-members-request.js";

export type PortfoliosAddMembersRequest = {
  data?: AddMembersRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosAddMembersRequestSchema: Schema<PortfoliosAddMembersRequest> =
  s.object<PortfoliosAddMembersRequest>(
    {
      data: s.optional(s.lazy(() => addMembersRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
