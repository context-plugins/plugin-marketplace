import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scenarioArgumentSchema, type ScenarioArgument } from "./scenario-argument.js";
import { argsSchemaSchema, type ArgsSchema } from "./unions/args-schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { slugSchema, type Slug } from "./unions/slug.js";
import { traceNameTemplateSchema, type TraceNameTemplate } from "./unions/trace-name-template.js";

export type ScenarioResponse = {
  id: string;
  registryId: string;
  buildId: string;
  name: string;
  slug?: Slug;
  description?: Description;
  argsSchema?: ArgsSchema;
  arguments?: ScenarioArgument[];
  metadata?: Record<string, unknown>;
  traceNameTemplate?: TraceNameTemplate;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scenarioResponseSchema: Schema<ScenarioResponse> = s.object<ScenarioResponse>(
  {
    id: s.string(),
    registryId: s.string(),
    buildId: s.string(),
    name: s.string(),
    slug: s.optional(s.lazy(() => slugSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    argsSchema: s.optional(s.lazy(() => argsSchemaSchema)),
    arguments: s.optional(s.array(s.lazy(() => scenarioArgumentSchema))),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    traceNameTemplate: s.optional(s.lazy(() => traceNameTemplateSchema)),
    createdAt: s.dateTime(),
    _keysMap: {
      registryId: "registry_id",
      buildId: "build_id",
      argsSchema: "args_schema",
      traceNameTemplate: "trace_name_template",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
