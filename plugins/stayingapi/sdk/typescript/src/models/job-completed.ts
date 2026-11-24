import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

/**
 * completed — the endpoint payload is at data.result and meta carries the full success meta
 * (credits charged once, platformResults, warnings; pagination is null on a job result).
 */
export type JobCompleted = {
  data: Data1;
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobCompletedProperties: s.Shape<JobCompleted> = {
  data: data1Schema,
  meta: metaInternalSchema,
};

export const jobCompletedInternalSchema: Schema<JobCompleted> = s.object<JobCompleted>(
  jobCompletedProperties,
  { additionalProperties: s.json() },
);

export const jobCompletedSchema: Schema<JobCompleted> = s.lazySchema(() =>
  s.object<JobCompleted>(
    {
      ...jobCompletedProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
