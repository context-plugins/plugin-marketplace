import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ActivityApi } from "./resources/activity-api.js";
import { Agents } from "./resources/agents.js";
import { Announcements } from "./resources/announcements.js";
import { Answers } from "./resources/answers.js";
import { Authentication } from "./resources/authentication.js";
import { ChatApi } from "./resources/chat-api.js";
import { Collections } from "./resources/collections.js";
import { Documents } from "./resources/documents.js";
import { Entities } from "./resources/entities.js";
import { Insights } from "./resources/insights.js";
import { Messages } from "./resources/messages.js";
import { Pins } from "./resources/pins.js";
import { Search } from "./resources/search.js";
import { Shortcuts } from "./resources/shortcuts.js";
import { Summarize } from "./resources/summarize.js";
import { Tools } from "./resources/tools.js";
import { VerificationApi } from "./resources/verification-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * # Introduction
 * These are the public APIs to enable implementing a custom client interface to the Glean system.
 *
 * # Usage guidelines
 * This API is evolving fast. Glean will provide advance notice of any planned backwards
 * incompatible changes along with a 6-month sunset period for anything that requires developers to
 * adopt the new versions.
 *
 * # SDK
 * Client bindings for the API can be generated for most popular languages (Python, Java, NodeJS,
 * etc). To do so:
 *
 * Download the OpenAPI specification for the API, by clicking on one of the following options:
 * 1. [Download JSON
 *    specification](https://api.redocly.com/registry/bundle/glean/Glean%20Client%20API%20SDK%20source/v1/openapi.json?branch=main&download=true)
 * 2. [Download YAML
 *    specification](https://api.redocly.com/registry/bundle/glean/Glean%20Client%20API%20SDK%20source/v1/openapi.yaml?branch=main&download=true)
 *
 * Use [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli) to generate
 * bindings for your language of choice, for example:
 * ```bash shell
 * $ npx @openapitools/openapi-generator-cli@latest generate -i client_api.yaml -g go
 * ```
 *
 * To see available languages:
 * ```bash shell
 * $ npx @openapitools/openapi-generator-cli@latest list
 * ```
 *
 * Determine the host you need to connect to. This will be the URL of the backend for your Glean
 * deployment, for example, customer-be.glean.com
 */
export class GleanClientApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #activityApi?: ActivityApi;
  #announcements?: Announcements;
  #answers?: Answers;
  #authentication?: Authentication;
  #chatApi?: ChatApi;
  #agents?: Agents;
  #collections?: Collections;
  #documents?: Documents;
  #insights?: Insights;
  #messages?: Messages;
  #pins?: Pins;
  #search?: Search;
  #entities?: Entities;
  #shortcuts?: Shortcuts;
  #summarize?: Summarize;
  #verificationApi?: VerificationApi;
  #tools?: Tools;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GLEAN_CLIENT_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GleanClientApiClient/0.9.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.9.0", schema: s.string() },
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

  get activityApi(): ActivityApi {
    return (this.#activityApi ??= new ActivityApi(this.#rawClient, this.#servers, this.#auth));
  }

  get announcements(): Announcements {
    return (this.#announcements ??= new Announcements(this.#rawClient, this.#servers, this.#auth));
  }

  get answers(): Answers {
    return (this.#answers ??= new Answers(this.#rawClient, this.#servers, this.#auth));
  }

  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers, this.#auth));
  }

  get chatApi(): ChatApi {
    return (this.#chatApi ??= new ChatApi(this.#rawClient, this.#servers, this.#auth));
  }

  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  get collections(): Collections {
    return (this.#collections ??= new Collections(this.#rawClient, this.#servers, this.#auth));
  }

  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  get pins(): Pins {
    return (this.#pins ??= new Pins(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get entities(): Entities {
    return (this.#entities ??= new Entities(this.#rawClient, this.#servers, this.#auth));
  }

  get shortcuts(): Shortcuts {
    return (this.#shortcuts ??= new Shortcuts(this.#rawClient, this.#servers, this.#auth));
  }

  get summarize(): Summarize {
    return (this.#summarize ??= new Summarize(this.#rawClient, this.#servers, this.#auth));
  }

  get verificationApi(): VerificationApi {
    return (this.#verificationApi ??= new VerificationApi(this.#rawClient, this.#servers, this.#auth));
  }

  get tools(): Tools {
    return (this.#tools ??= new Tools(this.#rawClient, this.#servers, this.#auth));
  }
}
