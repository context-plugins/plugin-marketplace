import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FindCloudDiagramsResponse = {
  /** URL to the diagram viewer. */
  diagramUrl: string;
  /** URL to the diagram image. */
  imageUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const findCloudDiagramsResponseProperties: s.Shape<FindCloudDiagramsResponse> = {
  diagramUrl: s.string(),
  imageUrl: s.string(),
};

export const findCloudDiagramsResponseInternalSchema: Schema<FindCloudDiagramsResponse> =
  s.object<FindCloudDiagramsResponse>(findCloudDiagramsResponseProperties, {
    additionalProperties: s.json(),
  });

export const findCloudDiagramsResponseSchema: Schema<FindCloudDiagramsResponse> = s.lazySchema(() =>
  s.object<FindCloudDiagramsResponse>(
    {
      ...findCloudDiagramsResponseProperties,
      diagramUrl: s.string().check(s.url()),
      imageUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
