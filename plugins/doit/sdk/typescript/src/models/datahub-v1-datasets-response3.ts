import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1DatasetsResponse3 = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1DatasetsResponse3Schema: Schema<DatahubV1DatasetsResponse3> =
  s.object<DatahubV1DatasetsResponse3>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
