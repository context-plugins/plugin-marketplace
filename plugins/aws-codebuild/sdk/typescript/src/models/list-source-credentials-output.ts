import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceCredentialsInfoSchema, type SourceCredentialsInfo } from "./source-credentials-info.js";

export type ListSourceCredentialsOutput = {
  /**
   * A list of SourceCredentialsInfo objects. Each SourceCredentialsInfo object includes the
   * authentication type, token ARN, and type of source provider for one set of credentials.
   */
  sourceCredentialsInfos?: SourceCredentialsInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSourceCredentialsOutputSchema: Schema<ListSourceCredentialsOutput> =
  s.object<ListSourceCredentialsOutput>(
    {
      sourceCredentialsInfos: s.optional(s.array(s.lazy(() => sourceCredentialsInfoSchema))),
    },
    { additionalProperties: s.json() },
  );
