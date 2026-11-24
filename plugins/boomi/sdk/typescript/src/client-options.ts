import type { BasicAuthCredentials, SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Basic Authentication using username (email) and API token. The account ID must also be included
   * in the URL path., Basic Authentication for the DataHub Platform API. Users with two-factor
   * authentication must include an X-Boomi-OTP header., Basic Authentication for the DataHub
   * Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic
   * Authentication using username (email) and API token. The account ID must also be included in
   * the URL path., Basic Authentication for the DataHub Platform API. Users with two-factor
   * authentication must include an X-Boomi-OTP header., Basic Authentication for the DataHub
   * Platform API. Users with two-factor authentication must include an X-Boomi-OTP header., Basic
   * Authentication for the DataHub Platform API. Users with two-factor authentication must include
   * an X-Boomi-OTP header.
   *
   * @remarks
   * Unset, it is read from `BOOMI_BASIC_AUTH_USERNAME` and `BOOMI_BASIC_AUTH_PASSWORD`.
   */
  readonly basicAuth?: BasicAuthCredentials | undefined;
  /**
   * JWT Bearer token for the Repository API., Environment Token obtained from the Boomi Event
   * Streams UI. Include as Authorization: Bearer {environment_token}., JWT Bearer token for the
   * Repository API., JWT Bearer token for the Repository API., JWT Bearer token for the Repository
   * API., JWT Bearer token for the Repository API.
   *
   * @remarks
   * Unset, it is read from `BOOMI_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /**
     * Boomi Platform REST API, Boomi DataHub Platform API, Topic-specific endpoint URL. Each event
     * topic has a unique REST API URL obtained from the Event Streams UI in the Boomi platform.,
     * Boomi DataHub Platform API, Boomi Platform REST API, Boomi DataHub Platform API, Boomi
     * DataHub Platform API, Boomi DataHub Platform API
     */
    default?: {
      baseUrl?: string;
      /** The Boomi account ID for the authenticated account. @default "your-account-id" */
      accountId?: string;
    };
    /**
     * Boomi Platform REST API, Boomi DataHub Platform API, Topic-specific endpoint URL. Each event
     * topic has a unique REST API URL obtained from the Event Streams UI in the Boomi platform.,
     * Boomi DataHub Platform API, Boomi Platform REST API, Boomi DataHub Platform API, Boomi
     * DataHub Platform API, Boomi DataHub Platform API
     */
    defaultBoomiDataHubGoldenRecordsApi?: {
      baseUrl?: string;
    };
    /**
     * Boomi Platform REST API, Boomi DataHub Platform API, Topic-specific endpoint URL. Each event
     * topic has a unique REST API URL obtained from the Event Streams UI in the Boomi platform.,
     * Boomi DataHub Platform API, Boomi Platform REST API, Boomi DataHub Platform API, Boomi
     * DataHub Platform API, Boomi DataHub Platform API
     */
    defaultBoomiEventStreamsRestMessagesApi?: {
      baseUrl?: string;
      /**
       * The unique hostname for this event topic's REST endpoint.
       *
       * @default "your-topic-endpoint.boomi.com"
       */
      topicEndpoint?: string;
    };
  };
};
