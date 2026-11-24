import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DiscoveredDatasetContentDto = {
  createdAt?: Date;
  datasourceId: string;
  id: string;
  name: string;
  onboarded: boolean;
  qualifiedName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoveredDatasetContentDtoSchema: Schema<DiscoveredDatasetContentDto> =
  s.object<DiscoveredDatasetContentDto>(
    {
      createdAt: s.optional(s.dateTime()),
      datasourceId: s.string(),
      id: s.string(),
      name: s.string(),
      onboarded: s.boolean(),
      qualifiedName: s.string(),
    },
    { additionalProperties: s.json() },
  );
