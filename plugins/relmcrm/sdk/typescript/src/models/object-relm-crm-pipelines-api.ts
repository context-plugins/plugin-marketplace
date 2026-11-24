import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmPipelinesApi = {
  Pipeline: "pipeline",
} as const;
export type ObjectRelmCrmPipelinesApi =
  | (typeof ObjectRelmCrmPipelinesApi)[keyof typeof ObjectRelmCrmPipelinesApi]
  | (string & {});

export const objectRelmCrmPipelinesApiSchema: EnumSchema<ObjectRelmCrmPipelinesApi> =
  s.enumOf<ObjectRelmCrmPipelinesApi>(ObjectRelmCrmPipelinesApi);
