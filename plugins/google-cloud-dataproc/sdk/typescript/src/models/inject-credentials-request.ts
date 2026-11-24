import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to inject credentials into a cluster. */
export type InjectCredentialsRequest = {
  /** Required. The cluster UUID. */
  clusterUuid?: string;
  /**
   * Required. The encrypted credentials being injected in to the cluster.The client is responsible
   * for encrypting the credentials in a way that is supported by the cluster.A wrapped value is
   * used here so that the actual contents of the encrypted credentials are not written to audit
   * logs.
   */
  credentialsCiphertext?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const injectCredentialsRequestSchema: Schema<InjectCredentialsRequest> =
  s.object<InjectCredentialsRequest>(
    {
      clusterUuid: s.optional(s.string()),
      credentialsCiphertext: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
