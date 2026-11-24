import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data = {
  /** The ID of the resource (e.g. task) to trigger the rule on. */
  resource: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    resource: s.string(),
  },
  { additionalProperties: s.json() },
);
