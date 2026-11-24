import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataFileUpdateRequest = {
  filename: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataFileUpdateRequestProperties: s.Shape<DataFileUpdateRequest> = {
  filename: s.string(),
};

export const dataFileUpdateRequestInternalSchema: Schema<DataFileUpdateRequest> =
  s.object<DataFileUpdateRequest>(dataFileUpdateRequestProperties, { additionalProperties: s.json() });

export const dataFileUpdateRequestSchema: Schema<DataFileUpdateRequest> = s.lazySchema(() =>
  s.object<DataFileUpdateRequest>(
    {
      ...dataFileUpdateRequestProperties,
      filename: s.string().check(s.minLength(1), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);
