import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chapInfoSchema, type ChapInfo } from "./chap-info.js";

export type DescribeChapCredentialsOutput = {
  /**
   * An array of ChapInfo objects that represent CHAP credentials. Each object in the array contains
   * CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an
   * empty array is returned. CHAP credential information is provided in a JSON object with the
   * following fields: InitiatorName: The iSCSI initiator that connects to the target.
   * SecretToAuthenticateInitiator: The secret key that the initiator (for example, the Windows
   * client) must provide to participate in mutual CHAP with the target. SecretToAuthenticateTarget:
   * The secret key that the target must provide to par
   */
  chapCredentials?: ChapInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeChapCredentialsOutputSchema: Schema<DescribeChapCredentialsOutput> =
  s.object<DescribeChapCredentialsOutput>(
    {
      chapCredentials: s.optional(s.array(s.lazy(() => chapInfoSchema))),
      _keysMap: {
        chapCredentials: "ChapCredentials",
      },
    },
    { additionalProperties: s.json() },
  );
