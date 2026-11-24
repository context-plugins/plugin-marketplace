import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AmazonStorageGatewayRestApi } from "./resources/amazon-storage-gateway-rest-api.js";
import { AwsStorageGateway } from "./resources/aws-storage-gateway.js";
import { CacheReport } from "./resources/cache-report.js";
import { Operations } from "./resources/operations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS Storage Gateway. 5 operation(s)., Generated
 * from AWS's published Smithy model for AWS Storage Gateway. 91 operation(s)., Generated from AWS's
 * published Smithy model for AWS Storage Gateway. 5 operation(s)., Generated from AWS's published
 * Smithy model for AWS Storage Gateway. 9 operation(s).
 */
export class AwsStorageGatewayClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #amazonStorageGatewayRestApi?: AmazonStorageGatewayRestApi;
  #awsStorageGateway?: AwsStorageGateway;
  #cacheReport?: CacheReport;
  #operations?: Operations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AWS_STORAGE_GATEWAY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AwsStorageGatewayClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get amazonStorageGatewayRestApi(): AmazonStorageGatewayRestApi {
    return (this.#amazonStorageGatewayRestApi ??= new AmazonStorageGatewayRestApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get awsStorageGateway(): AwsStorageGateway {
    return (this.#awsStorageGateway ??= new AwsStorageGateway(this.#rawClient, this.#servers, this.#auth));
  }

  get cacheReport(): CacheReport {
    return (this.#cacheReport ??= new CacheReport(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }
}
