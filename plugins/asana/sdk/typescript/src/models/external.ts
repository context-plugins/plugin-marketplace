import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or
 * included by using [Opt In] (/docs/input-output-options). The external field allows you to store
 * app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data
 * blob that can store app-specific character strings. Note that you will need to authenticate with
 * Oauth to access or modify this data. Once an external gid is set, you can use the notation
 * `external:custom_gid` to reference your object anywhere in the API where you may use the original
 * object gid. See the page on Custom External Data for more details.
 */
export type External = {
  gid?: string;
  data?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalSchema: Schema<External> = s.object<External>(
  {
    gid: s.optional(s.string()),
    data: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
