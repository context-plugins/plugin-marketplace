import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You
 * can use a UNIT resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE
 * resolver type. You can use a PIPELINE resolver to invoke a series of Function objects in a serial
 * manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
 */
export const Kind = {
  Unit: "UNIT",
  Pipeline: "PIPELINE",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
