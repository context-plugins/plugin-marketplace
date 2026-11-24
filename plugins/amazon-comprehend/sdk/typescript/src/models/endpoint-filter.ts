import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status8Schema, type Status8 } from "./status8.js";

export type EndpointFilter = {
  /** The Amazon Resource Number (ARN) of the model to which the endpoint is attached. */
  modelArn?: string;
  /**
   * Specifies the status of the endpoint being returned. Possible values are: Creating, Ready,
   * Updating, Deleting, Failed.
   */
  status?: Status8;
  /** Specifies a date before which the returned endpoint or endpoints were created. */
  creationTimeBefore?: Date;
  /** Specifies a date after which the returned endpoint or endpoints were created. */
  creationTimeAfter?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointFilterSchema: Schema<EndpointFilter> = s.object<EndpointFilter>(
  {
    modelArn: s.optional(s.string()),
    status: s.optional(s.lazy(() => status8Schema)),
    creationTimeBefore: s.optional(s.dateTime()),
    creationTimeAfter: s.optional(s.dateTime()),
    _keysMap: {
      modelArn: "ModelArn",
      status: "Status",
      creationTimeBefore: "CreationTimeBefore",
      creationTimeAfter: "CreationTimeAfter",
    },
  },
  { additionalProperties: s.json() },
);
