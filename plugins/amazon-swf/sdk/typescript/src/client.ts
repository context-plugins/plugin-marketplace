import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AmazonSimpleWorkflowService } from "./resources/amazon-simple-workflow-service.js";
import { Operations } from "./resources/operations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Simple Workflow Service. 37 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Simple Workflow Service. 22 operation(s).
 */
export class AmazonSwfClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #amazonSimpleWorkflowService?: AmazonSimpleWorkflowService;
  #operations?: Operations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_SWF_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonSwfClient/0.1.0 TypeScript", schema: s.string() },
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

  get amazonSimpleWorkflowService(): AmazonSimpleWorkflowService {
    return (this.#amazonSimpleWorkflowService ??= new AmazonSimpleWorkflowService(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }
}
