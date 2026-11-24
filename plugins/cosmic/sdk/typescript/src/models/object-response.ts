import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectModelSchema, type ObjectModel } from "./object-model.js";

export type ObjectResponse = {
  /** A single piece of content. Which properties are present depends on `props`. */
  object: ObjectModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectResponseSchema: Schema<ObjectResponse> = s.object<ObjectResponse>(
  {
    object: objectModelSchema,
  },
  { additionalProperties: s.json() },
);
