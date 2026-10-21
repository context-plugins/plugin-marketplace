import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { restCollectMethodGetSchema, type RestCollectMethodGet } from "../rest-collect-method-get.js";
import { restCollectMethodOtherSchema, type RestCollectMethodOther } from "../rest-collect-method-other.js";
import {
  restCollectMethodPostWithBodySchema,
  type RestCollectMethodPostWithBody,
} from "../rest-collect-method-post-with-body.js";
import { restCollectMethodPostSchema, type RestCollectMethodPost } from "../rest-collect-method-post.js";

export type BaseType18 =
  | (RestCollectMethodGet & { collectMethod: "get" })
  | (RestCollectMethodPost & { collectMethod: "post" })
  | (RestCollectMethodPostWithBody & { collectMethod: "post_with_body" })
  | (RestCollectMethodOther & { collectMethod: "other" });

export const baseType18Schema: Schema<BaseType18> = s.discriminatedUnion<BaseType18>("collectMethod", {
  get: restCollectMethodGetSchema,
  post: restCollectMethodPostSchema,
  post_with_body: restCollectMethodPostWithBodySchema,
  other: restCollectMethodOtherSchema,
});
