import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceCollectionType = {
  AwsCloudFormation: "AWS_CLOUD_FORMATION",
  AwsService: "AWS_SERVICE",
  AwsTags: "AWS_TAGS",
} as const;
export type ResourceCollectionType =
  | (typeof ResourceCollectionType)[keyof typeof ResourceCollectionType]
  | (string & {});

export const resourceCollectionTypeSchema: EnumSchema<ResourceCollectionType> =
  s.enumOf<ResourceCollectionType>(ResourceCollectionType);
