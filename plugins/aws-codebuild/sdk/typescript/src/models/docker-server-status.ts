import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DockerServerStatus = {
  /** The status of the docker server. */
  status?: string;
  /** A message associated with the status of a docker server. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dockerServerStatusSchema: Schema<DockerServerStatus> = s.object<DockerServerStatus>(
  {
    status: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
