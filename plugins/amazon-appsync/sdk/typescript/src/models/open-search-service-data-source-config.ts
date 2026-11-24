import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OpenSearchServiceDataSourceConfig = {
  /** The endpoint. */
  endpoint: string;
  /** The Amazon Web Services Region. */
  awsRegion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const openSearchServiceDataSourceConfigSchema: Schema<OpenSearchServiceDataSourceConfig> =
  s.object<OpenSearchServiceDataSourceConfig>(
    {
      endpoint: s.string(),
      awsRegion: s.string(),
    },
    { additionalProperties: s.json() },
  );
