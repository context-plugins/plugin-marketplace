import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListSandboxesOutput = {
  /** Information about the requested sandbox IDs. */
  ids?: string[];
  /** Information about the next token to get paginated results. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSandboxesOutputSchema: Schema<ListSandboxesOutput> = s.object<ListSandboxesOutput>(
  {
    ids: s.optional(s.array(s.string())),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
