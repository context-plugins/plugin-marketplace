import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AddonSchema,
  type GoogleCloudApihubV1Addon,
} from "./google-cloud-apihub-v1-addon.js";

/** The ListAddons method's response. */
export type GoogleCloudApihubV1ListAddonsResponse = {
  /** The list of addons. */
  addons?: GoogleCloudApihubV1Addon[];
  /**
   * A token to retrieve the next page of results, or empty if there are no more results in the
   * list.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListAddonsResponseSchema: Schema<GoogleCloudApihubV1ListAddonsResponse> =
  s.object<GoogleCloudApihubV1ListAddonsResponse>(
    {
      addons: s.optional(s.array(s.lazy(() => googleCloudApihubV1AddonSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
