import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { imageSchema, type Image } from "./image.js";

export type DetectFacesRequest = {
  image: Image;
  /**
   * An array of facial attributes you want to be returned. A DEFAULT subset of facial attributes -
   * BoundingBox, Confidence, Pose, Quality, and Landmarks - will always be returned. You can
   * request for specific facial attributes (in addition to the default list) - by using ["DEFAULT",
   * "FACE_OCCLUDED"] or just ["FACE_OCCLUDED"]. You can request for all facial attributes by using
   * ["ALL"]. Requesting more attributes may increase response time. If you provide both, ["ALL",
   * "DEFAULT"], the service uses a logical "AND" operator to determine which attributes to return
   * (in this case, all attributes). Note t
   */
  attributes?: Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectFacesRequestSchema: Schema<DetectFacesRequest> = s.object<DetectFacesRequest>(
  {
    image: imageSchema,
    attributes: s.optional(s.array(s.lazy(() => attributeSchema))),
    _keysMap: {
      image: "Image",
      attributes: "Attributes",
    },
  },
  { additionalProperties: s.json() },
);
