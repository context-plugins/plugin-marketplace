import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Apps } from "./resources/apps.js";
import { BitlinksApi } from "./resources/bitlinks-api.js";
import { BsDs } from "./resources/bs-ds.js";
import { CampaignsApi } from "./resources/campaigns-api.js";
import { CustomBitlinks } from "./resources/custom-bitlinks.js";
import { GroupsApi } from "./resources/groups-api.js";
import { OrganizationsApi } from "./resources/organizations-api.js";
import { QrCodes } from "./resources/qr-codes.js";
import { UserApi } from "./resources/user-api.js";
import { WebhooksApi } from "./resources/webhooks-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom branded
 * short domain (BSD).
 *
 * **Related Operations:**
 * - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
 * - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink, Branded short domains (BSDs) are the
 *   custom domains used to brand your links. A BSD can be added to a Bitly organization and may be
 *   assigned to one or more groups. They can contain up to 32 characters., Bitly Campaigns are used
 *   to build and organize links and metrics for marketing campaigns., These endpoints are for
 *   updating custom Bitlinks only. Custom Bitlinks have both a BSD and a customized back-half
 *   (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly domain or ends with an
 *   auto-generated random string it is not a custom Bitlink., Groups are subdivisions within
 *   organizations. Every user will be in at least one group, and every shortened link will be in
 *   one group. Most actions on our API will be on behalf of a group. For example, when you shorten
 *   a link, it will be on behalf of a user and a group., Organizations are equivalent to a Bitly
 *   account. Every plan limit, group, and user is tied to an organization., QR codes can be created
 *   and customized with different dot patterns, corner shapes, colors, and more. They can contain
 *   bitlinks, links to microsites, or several kinds of static data., Some subscription plans allow
 *   multiple users. Only one user is used for authenticating a call, and these operations apply
 *   only to the authenticated user., Webhooks are a method of sending information from Bitly to an
 *   application outside of Bitly. It's a way to automate actions or updates between two different
 *   systems. These endpoints are for configuring your webhooks.
 */
export class BitlyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #apps?: Apps;
  #bitlinksApi?: BitlinksApi;
  #bsDs?: BsDs;
  #campaignsApi?: CampaignsApi;
  #customBitlinks?: CustomBitlinks;
  #groupsApi?: GroupsApi;
  #organizationsApi?: OrganizationsApi;
  #qrCodes?: QrCodes;
  #userApi?: UserApi;
  #webhooksApi?: WebhooksApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BITLY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BitlyClient/4.0.0 TypeScript", schema: s.string() },
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

  get apps(): Apps {
    return (this.#apps ??= new Apps(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Bitlinks are shortened links. They could begin with the bit.ly domain or your own custom
   * branded short domain (BSD).
   *
   * **Related Operations:**
   * - POST /bitlinks - Create a new bitlink or add a custom keyword to an existing bitlink
   * - PATCH /bitlinks/{bitlink} - Redirect an existing bitlink
   */
  get bitlinksApi(): BitlinksApi {
    return (this.#bitlinksApi ??= new BitlinksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Branded short domains (BSDs) are the custom domains used to brand your links. A BSD can be
   * added to a Bitly organization and may be assigned to one or more groups. They can contain up to
   * 32 characters.
   */
  get bsDs(): BsDs {
    return (this.#bsDs ??= new BsDs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Bitly Campaigns are used to build and organize links and metrics for marketing campaigns.
   */
  get campaignsApi(): CampaignsApi {
    return (this.#campaignsApi ??= new CampaignsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * These endpoints are for updating custom Bitlinks only. Custom Bitlinks have both a BSD and a
   * customized back-half (e.g., yourcompany.com/yourcampaign). If a link begins with the bit.ly
   * domain or ends with an auto-generated random string it is not a custom Bitlink.
   */
  get customBitlinks(): CustomBitlinks {
    return (this.#customBitlinks ??= new CustomBitlinks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Groups are subdivisions within organizations. Every user will be in at least one group, and
   * every shortened link will be in one group. Most actions on our API will be on behalf of a
   * group. For example, when you shorten a link, it will be on behalf of a user and a group.
   */
  get groupsApi(): GroupsApi {
    return (this.#groupsApi ??= new GroupsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Organizations are equivalent to a Bitly account. Every plan limit, group, and user is tied to
   * an organization.
   */
  get organizationsApi(): OrganizationsApi {
    return (this.#organizationsApi ??= new OrganizationsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * QR codes can be created and customized with different dot patterns, corner shapes, colors, and
   * more. They can contain bitlinks, links to microsites, or several kinds of static data.
   */
  get qrCodes(): QrCodes {
    return (this.#qrCodes ??= new QrCodes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Some subscription plans allow multiple users. Only one user is used for authenticating a call,
   * and these operations apply only to the authenticated user.
   */
  get userApi(): UserApi {
    return (this.#userApi ??= new UserApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Webhooks are a method of sending information from Bitly to an application outside of Bitly.
   * It's a way to automate actions or updates between two different systems. These endpoints are
   * for configuring your webhooks.
   */
  get webhooksApi(): WebhooksApi {
    return (this.#webhooksApi ??= new WebhooksApi(this.#rawClient, this.#servers, this.#auth));
  }
}
