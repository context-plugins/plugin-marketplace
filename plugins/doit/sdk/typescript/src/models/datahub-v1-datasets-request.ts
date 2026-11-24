import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logoNameSchema, type LogoName } from "./logo-name.js";

export type DatahubV1DatasetsRequest = {
  /**
   * The name of the dataset. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), dash
   * (-), and spaces between words.
   */
  name: string;
  /** An optional description for the dataset. */
  description?: string;
  /**
   * Optional human-readable name shown in the DoiT console and in report results instead of `name`.
   * 1-64 characters after trimming; must not be unique. Ingest always uses `name`.
   */
  displayName?: string;
  /** An optional preset logo shown next to the dataset in the DoiT console. */
  logoName?: LogoName;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const datahubV1DatasetsRequestProperties: s.Shape<DatahubV1DatasetsRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  displayName: s.optional(s.string()),
  logoName: s.optional(s.lazy(() => logoNameSchema)),
};

export const datahubV1DatasetsRequestInternalSchema: Schema<DatahubV1DatasetsRequest> =
  s.object<DatahubV1DatasetsRequest>(datahubV1DatasetsRequestProperties, { additionalProperties: s.json() });

export const datahubV1DatasetsRequestSchema: Schema<DatahubV1DatasetsRequest> = s.lazySchema(() =>
  s.object<DatahubV1DatasetsRequest>(
    {
      ...datahubV1DatasetsRequestProperties,
      name: s.string().check(s.pattern("^[a-zA-Z0-9_-]+( [a-zA-Z0-9_-]+)*$")),
      displayName: s.optional(s.string().check(s.maxLength(64))),
    },
    { additionalProperties: s.json() },
  ),
);
