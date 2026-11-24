import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccessKey } from "./resources/access-key.js";
import { Browsers } from "./resources/browsers.js";
import { Builds } from "./resources/builds.js";
import { PlanApi } from "./resources/plan-api.js";
import { Projects } from "./resources/projects.js";
import { Sessions } from "./resources/sessions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Best-effort OpenAPI 3.1 description of the BrowserStack Automate REST API for managing plans,
 * projects, builds, sessions, browsers, devices, access keys, and media used in Selenium-based
 * cross-browser automated testing on BrowserStack.
 *
 * Authentication uses HTTP Basic with your BrowserStack username and access key.
 */
export class BrowserStackClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accessKey?: AccessKey;
  #browsers?: Browsers;
  #builds?: Builds;
  #planApi?: PlanApi;
  #projects?: Projects;
  #sessions?: Sessions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BROWSER_STACK_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BrowserStackClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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

  /**
   * Operations on Automate access keys.
   */
  get accessKey(): AccessKey {
    return (this.#accessKey ??= new AccessKey(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations describing supported browsers and devices.
   */
  get browsers(): Browsers {
    return (this.#browsers ??= new Browsers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations on Automate builds.
   */
  get builds(): Builds {
    return (this.#builds ??= new Builds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations describing the current Automate subscription plan and capacity.
   */
  get planApi(): PlanApi {
    return (this.#planApi ??= new PlanApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations on Automate projects.
   */
  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations on Automate sessions.
   */
  get sessions(): Sessions {
    return (this.#sessions ??= new Sessions(this.#rawClient, this.#servers, this.#auth));
  }
}
