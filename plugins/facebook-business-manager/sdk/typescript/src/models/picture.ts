import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";

/** The Page profile picture */
export type Picture = {
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pictureProperties: s.Shape<Picture> = {
  data: s.optional(s.lazy(() => dataInternalSchema)),
};

export const pictureInternalSchema: Schema<Picture> = s.object<Picture>(pictureProperties, {
  additionalProperties: s.json(),
});

export const pictureSchema: Schema<Picture> = s.lazySchema(() =>
  s.object<Picture>(
    {
      ...pictureProperties,
      data: s.optional(s.lazy(() => dataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
