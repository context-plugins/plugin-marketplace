import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AmazonEbsAmazonElasticBlockStoreEbsApi } from "./resources/amazon-ebs-amazon-elastic-block-store-ebs-api.js";
import { Blocks } from "./resources/blocks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Elastic Block Store. 3 operation(s).
 */
export class AmazonEbsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #amazonEbsAmazonElasticBlockStoreEbsApi?: AmazonEbsAmazonElasticBlockStoreEbsApi;
  #blocks?: Blocks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_EBS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonEbsClient/0.1.0 TypeScript", schema: s.string() },
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

  get amazonEbsAmazonElasticBlockStoreEbsApi(): AmazonEbsAmazonElasticBlockStoreEbsApi {
    return (this.#amazonEbsAmazonElasticBlockStoreEbsApi ??= new AmazonEbsAmazonElasticBlockStoreEbsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get blocks(): Blocks {
    return (this.#blocks ??= new Blocks(this.#rawClient, this.#servers, this.#auth));
  }
}
