import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The connected tool to read from (Organisation → Integrations & webhooks): langfuse, langsmith,
 * braintrust or weave
 */
export const SourceDeliverdDevTasksApi = {
  Langfuse: "langfuse",
  Langsmith: "langsmith",
  Braintrust: "braintrust",
  Weave: "weave",
} as const;
export type SourceDeliverdDevTasksApi =
  | (typeof SourceDeliverdDevTasksApi)[keyof typeof SourceDeliverdDevTasksApi]
  | (string & {});

export const sourceDeliverdDevTasksApiSchema: EnumSchema<SourceDeliverdDevTasksApi> =
  s.enumOf<SourceDeliverdDevTasksApi>(SourceDeliverdDevTasksApi);
