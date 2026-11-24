import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propSchema, type Prop } from "./prop.js";

export type PropsResponse = {
  props?: Prop[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propsResponseSchema: Schema<PropsResponse> = s.object<PropsResponse>(
  {
    props: s.optional(s.array(s.lazy(() => propSchema))),
  },
  { additionalProperties: s.json() },
);
