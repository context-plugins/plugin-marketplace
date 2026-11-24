import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosReview = {
  /** Review ID */
  id?: string;
  /** App ID */
  app?: string;
  /** App storefront */
  country?: string;
  /** Name of the review author */
  userName?: string;
  /** Review title */
  title?: string;
  /** Creation date */
  created?: string;
  /** App rating */
  stars?: number;
  /** Review text */
  comment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosReviewSchema: Schema<IosReview> = s.object<IosReview>(
  {
    id: s.optional(s.string()),
    app: s.optional(s.string()),
    country: s.optional(s.string()),
    userName: s.optional(s.string()),
    title: s.optional(s.string()),
    created: s.optional(s.string()),
    stars: s.optional(s.int()),
    comment: s.optional(s.string()),
    _keysMap: {
      userName: "user_name",
    },
  },
  { additionalProperties: s.json() },
);
