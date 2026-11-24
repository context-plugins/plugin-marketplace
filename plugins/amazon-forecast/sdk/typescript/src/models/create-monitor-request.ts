import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateMonitorRequest = {
  /** The name of the monitor resource. */
  monitorName: string;
  /** The Amazon Resource Name (ARN) of the predictor to monitor. */
  resourceArn: string;
  /** A list of tags to apply to the monitor resource. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createMonitorRequestSchema: Schema<CreateMonitorRequest> = s.object<CreateMonitorRequest>(
  {
    monitorName: s.string(),
    resourceArn: s.string(),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      monitorName: "MonitorName",
      resourceArn: "ResourceArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
