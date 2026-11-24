import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { resourceInternalSchema, resourceSchema, type Resource } from "./resource.js";
import { toolSchema, type Tool } from "./tool.js";
import { Transport, transportSchema } from "./transport.js";

export type McpLock = {
  tools?: Tool[];
  prompts?: Prompt[];
  resources?: Resource[];
  /** @default Transport.Http */
  transport?: Transport;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mcpLockProperties: s.Shape<McpLock> = {
  tools: s.optional(s.array(s.lazy(() => toolSchema))),
  prompts: s.optional(s.array(s.lazy(() => promptSchema))),
  resources: s.optional(s.array(s.lazy(() => resourceInternalSchema))),
  transport: s.defaulted(transportSchema, Transport.Http),
};

export const mcpLockInternalSchema: Schema<McpLock> = s.object<McpLock>(mcpLockProperties, {
  additionalProperties: s.json(),
});

export const mcpLockSchema: Schema<McpLock> = s.lazySchema(() =>
  s.object<McpLock>(
    {
      ...mcpLockProperties,
      resources: s.optional(s.array(s.lazy(() => resourceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
