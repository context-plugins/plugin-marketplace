import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentConfig1Schema, type EnvironmentConfig1 } from "./environment-config1.js";
import { jupyterConfig2Schema, type JupyterConfig2 } from "./jupyter-config2.js";
import { runtimeConfig4Schema, type RuntimeConfig4 } from "./runtime-config4.js";

/** A representation of a session template. */
export type SessionTemplate = {
  /** Optional. Brief description of the template. */
  description?: string;
  /**
   * Optional. Labels to associate with sessions created using this template. Label keys must
   * contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must
   * contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No
   * more than 32 labels can be associated with a session.
   */
  labels?: Record<string, string>;
  /** Output only. The email address of the user who created the template. */
  creator?: string;
  /** Optional. Jupyter session config. */
  jupyterSession?: JupyterConfig2;
  /** Optional. Spark connect session config. */
  sparkConnectSession?: Record<string, unknown>;
  /** Required. Identifier. The resource name of the session template. */
  name?: string;
  /**
   * Output only. A session template UUID (Unique Universal Identifier). The service generates this
   * value when it creates the session template.
   */
  uuid?: string;
  /** Output only. The time when the template was created. */
  createTime?: string;
  /** Optional. Environment configuration for session execution. */
  environmentConfig?: EnvironmentConfig1;
  /** Optional. User-friendly display name for the session template. Can be up to 63 characters. */
  displayName?: string;
  /** Output only. The time the template was last updated. */
  updateTime?: string;
  /** Optional. Runtime configuration for session execution. */
  runtimeConfig?: RuntimeConfig4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionTemplateSchema: Schema<SessionTemplate> = s.object<SessionTemplate>(
  {
    description: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    creator: s.optional(s.string()),
    jupyterSession: s.optional(s.lazy(() => jupyterConfig2Schema)),
    sparkConnectSession: s.optional(s.record(s.string(), s.unknown())),
    name: s.optional(s.string()),
    uuid: s.optional(s.string()),
    createTime: s.optional(s.string()),
    environmentConfig: s.optional(s.lazy(() => environmentConfig1Schema)),
    displayName: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    runtimeConfig: s.optional(s.lazy(() => runtimeConfig4Schema)),
  },
  { additionalProperties: s.json() },
);
