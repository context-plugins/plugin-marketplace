import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AccessGetSchema,
  type GoogleCloudApigeeV1AccessGet,
} from "./google-cloud-apigee-v1-access-get.js";
import {
  googleCloudApigeeV1AccessRemoveSchema,
  type GoogleCloudApigeeV1AccessRemove,
} from "./google-cloud-apigee-v1-access-remove.js";
import {
  googleCloudApigeeV1AccessSetSchema,
  type GoogleCloudApigeeV1AccessSet,
} from "./google-cloud-apigee-v1-access-set.js";

export type GoogleCloudApigeeV1Access = {
  /**
   * Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" :
   * "default" }
   */
  set?: GoogleCloudApigeeV1AccessSet;
  /** Remove action. For example, "Remove" : { "name" : "target.name", "success" : true } */
  remove?: GoogleCloudApigeeV1AccessRemove;
  /** Get action. For example, "Get" : { "name" : "target.name", "value" : "default" } */
  get?: GoogleCloudApigeeV1AccessGet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AccessSchema: Schema<GoogleCloudApigeeV1Access> =
  s.object<GoogleCloudApigeeV1Access>(
    {
      set: s.optional(s.lazy(() => googleCloudApigeeV1AccessSetSchema)),
      remove: s.optional(s.lazy(() => googleCloudApigeeV1AccessRemoveSchema)),
      get: s.optional(s.lazy(() => googleCloudApigeeV1AccessGetSchema)),
      _keysMap: {
        set: "Set",
        remove: "Remove",
        get: "Get",
      },
    },
    { additionalProperties: s.json() },
  );
