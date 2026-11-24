import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AppEvents } from "./resources/app-events.js";
import { AppPartnerConnectionApi } from "./resources/app-partner-connection-api.js";
import { Apps } from "./resources/apps.js";
import { Bids } from "./resources/bids.js";
import { Campaigns } from "./resources/campaigns.js";
import { PartnerConfigurations } from "./resources/partner-configurations.js";
import { Partners } from "./resources/partners.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * API to send s2s app events to justtrack, Manage your apps, campaigns, partners, and more., Manage
 * your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and more.,
 * Manage your apps, campaigns, partners, and more., Manage your apps, campaigns, partners, and
 * more., Manage your apps, campaigns, partners, and more.
 */
export class ApplikeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #appEvents?: AppEvents;
  #appPartnerConnectionApi?: AppPartnerConnectionApi;
  #apps?: Apps;
  #bids?: Bids;
  #campaigns?: Campaigns;
  #partnerConfigurations?: PartnerConfigurations;
  #partners?: Partners;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "APPLIKE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ApplikeClient/1.0.0 TypeScript", schema: s.string() },
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

  get appEvents(): AppEvents {
    return (this.#appEvents ??= new AppEvents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * With the App Partner Connection API, you can:
   *
   * - View details about an app partner connection
   * - Create a partner connection for an app (This is the API equivalent of connecting a partner in
   *   the dashboard)
   * - Update details about an app partner connection
   *
   * :::info
   *
   * Without an app partner connection, justtrack can't operate for most of its features, including
   * campaign creation, tracking, and more.
   *
   * :::
   */
  get appPartnerConnectionApi(): AppPartnerConnectionApi {
    return (this.#appPartnerConnectionApi ??= new AppPartnerConnectionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * With the App API, you can:
   *
   * - View your list of apps
   * - Create an app
   */
  get apps(): Apps {
    return (this.#apps ??= new Apps(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Bidding operates as a distributed transaction.
   */
  get bids(): Bids {
    return (this.#bids ??= new Bids(this.#rawClient, this.#servers, this.#auth));
  }

  get campaigns(): Campaigns {
    return (this.#campaigns ??= new Campaigns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * In justtrack, you integrate your app with the advertising partners that run your campaigns.
   */
  get partnerConfigurations(): PartnerConfigurations {
    return (this.#partnerConfigurations ??= new PartnerConfigurations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get partners(): Partners {
    return (this.#partners ??= new Partners(this.#rawClient, this.#servers, this.#auth));
  }
}
