import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platform1Schema, type Platform1 } from "./platform1.js";
import {
  statusDoiTCloudIncidentsApiSchema,
  type StatusDoiTCloudIncidentsApi,
} from "./status-doi-tcloud-incidents-api.js";

export type CoreV1CloudincidentsResponse1 = {
  /** The time when this cloud incident was created, in milliseconds since the epoch. */
  createTime?: number;
  /** Detailed explanation on the cloud incident. */
  description?: string;
  /** The unique id of a cloud incident */
  id?: string;
  /** The cloud platform. */
  platform?: Platform1;
  /** The name of the product affected by the cloud incident */
  product?: string;
  /** The Status of the issue */
  status?: StatusDoiTCloudIncidentsApi;
  /** A summary of the cloud incident. */
  summary?: string;
  /** Cloud incident symptoms, if available. */
  symptoms?: string;
  /** Cloud incident name provided by the cloud vendor. */
  title?: string;
  /** Mitigation workaround for the cloud incident, if available. */
  workaround?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coreV1CloudincidentsResponse1Schema: Schema<CoreV1CloudincidentsResponse1> =
  s.object<CoreV1CloudincidentsResponse1>(
    {
      createTime: s.optional(s.int()),
      description: s.optional(s.string()),
      id: s.optional(s.string()),
      platform: s.optional(s.lazy(() => platform1Schema)),
      product: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusDoiTCloudIncidentsApiSchema)),
      summary: s.optional(s.string()),
      symptoms: s.optional(s.string()),
      title: s.optional(s.string()),
      workaround: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
