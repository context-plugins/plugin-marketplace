import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Browsers } from "./resources/browsers.js";
import { Extensions } from "./resources/extensions.js";
import { Integrations } from "./resources/integrations.js";
import { Profiles } from "./resources/profiles.js";
import { Runs } from "./resources/runs.js";
import { Sessions } from "./resources/sessions.js";
import { Wallets } from "./resources/wallets.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Browser Use agent runs API (v4)
 */
export class BrowserUseClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #browsers?: Browsers;
  #extensions?: Extensions;
  #integrations?: Integrations;
  #profiles?: Profiles;
  #runs?: Runs;
  #sessions?: Sessions;
  #wallets?: Wallets;
  #workspaces?: Workspaces;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BROWSER_USE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BrowserUseClient/4.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "4.0.0", schema: s.string() },
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

  get browsers(): Browsers {
    return (this.#browsers ??= new Browsers(this.#rawClient, this.#servers, this.#auth));
  }

  get extensions(): Extensions {
    return (this.#extensions ??= new Extensions(this.#rawClient, this.#servers, this.#auth));
  }

  get integrations(): Integrations {
    return (this.#integrations ??= new Integrations(this.#rawClient, this.#servers, this.#auth));
  }

  get profiles(): Profiles {
    return (this.#profiles ??= new Profiles(this.#rawClient, this.#servers, this.#auth));
  }

  get runs(): Runs {
    return (this.#runs ??= new Runs(this.#rawClient, this.#servers, this.#auth));
  }

  get sessions(): Sessions {
    return (this.#sessions ??= new Sessions(this.#rawClient, this.#servers, this.#auth));
  }

  get wallets(): Wallets {
    return (this.#wallets ??= new Wallets(this.#rawClient, this.#servers, this.#auth));
  }

  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }
}
