import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sandboxSchema, type Sandbox } from "./sandbox.js";

export type BatchGetSandboxesOutput = {
  /** Information about the requested sandboxes. */
  sandboxes?: Sandbox[];
  /** The IDs of sandboxes for which information could not be found. */
  sandboxesNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetSandboxesOutputSchema: Schema<BatchGetSandboxesOutput> =
  s.object<BatchGetSandboxesOutput>(
    {
      sandboxes: s.optional(s.array(s.lazy(() => sandboxSchema))),
      sandboxesNotFound: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
