import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Messages } from "./resources/messages.js";
import { Permissions } from "./resources/permissions.js";
import { Queues } from "./resources/queues.js";
import { Tags } from "./resources/tags.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Simple Queue Service. 10 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Simple Queue Service. 2 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Simple Queue Service. 10 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Simple Queue Service. 3 operation(s).
 */
export class AmazonSqsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #messages?: Messages;
  #permissions?: Permissions;
  #queues?: Queues;
  #tags?: Tags;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_SQS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonSqsClient/0.1.0 TypeScript", schema: s.string() },
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

  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  get permissions(): Permissions {
    return (this.#permissions ??= new Permissions(this.#rawClient, this.#servers, this.#auth));
  }

  get queues(): Queues {
    return (this.#queues ??= new Queues(this.#rawClient, this.#servers, this.#auth));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }
}
