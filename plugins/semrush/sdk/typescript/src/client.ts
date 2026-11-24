import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { HermesPartnerApi } from "./resources/hermes-partner-api.js";
import { JwtIssuer } from "./resources/jwt-issuer.js";
import { PartnerService } from "./resources/partner-service.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * SEMrush is an all-in-one digital marketing tool that helps businesses improve their online
 * visibility and attract more customers.
 */
export class SemrushClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #hermesPartnerApi?: HermesPartnerApi;
  #jwtIssuer?: JwtIssuer;
  #partnerService?: PartnerService;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SEMRUSH_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SemrushClient/0.0.1 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.0.1", schema: s.string() },
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

  get hermesPartnerApi(): HermesPartnerApi {
    return (this.#hermesPartnerApi ??= new HermesPartnerApi(this.#rawClient, this.#servers, this.#auth));
  }

  get jwtIssuer(): JwtIssuer {
    return (this.#jwtIssuer ??= new JwtIssuer(this.#rawClient, this.#servers));
  }

  get partnerService(): PartnerService {
    return (this.#partnerService ??= new PartnerService(this.#rawClient, this.#servers, this.#auth));
  }
}
