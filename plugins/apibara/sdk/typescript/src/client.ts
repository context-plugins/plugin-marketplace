import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ChangeStream } from "./resources/change-stream.js";
import { Filters } from "./resources/filters.js";
import { ImageProxy } from "./resources/image-proxy.js";
import { Locations } from "./resources/locations.js";
import { Market } from "./resources/market.js";
import { RelatedVehicles } from "./resources/related-vehicles.js";
import { Shipping } from "./resources/shipping.js";
import { UrlTools } from "./resources/url-tools.js";
import { Usage } from "./resources/usage.js";
import { VehicleAuction } from "./resources/vehicle-auction.js";
import { VehicleHistory } from "./resources/vehicle-history.js";
import { Vehicles } from "./resources/vehicles.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Structured JSON API for Copart and IAAI vehicle auction data. Search auction vehicles, retrieve
 * VIN and lot details, photos, prices, auction status, sale history, related vehicles, filters,
 * locations, usage information, image proxy responses, and auction-to-port shipping prices.
 *
 * Canonical public facts: 20M+ lifetime/cumulative indexed auction records (not the retained
 * dataset); 4.3M+ current supported vehicle records; 4,310,553 current vehicle/lot records and
 * 6,197,624 retained historical records (10,508,177 retained in total), measured
 * 2026-11-06T10:00:03Z; approximately 30K+ records added or refreshed daily; supported price/status
 * refresh up to 15 minutes and often sooner; supported live bid refresh about 10–15 seconds. Counts
 * are not unique VINs; field availability and freshness vary by source and lot. Approximately one
 * year of retained Copart and IAA / IAAI auction history. Availability varies by VIN, lot and
 * source; not every vehicle has a complete year of records. A five-year archive is not available.
 */
export class ApibaraClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #changeStream?: ChangeStream;
  #filters?: Filters;
  #imageProxy?: ImageProxy;
  #locations?: Locations;
  #market?: Market;
  #relatedVehicles?: RelatedVehicles;
  #shipping?: Shipping;
  #urlTools?: UrlTools;
  #usage?: Usage;
  #vehicleAuction?: VehicleAuction;
  #vehicleHistory?: VehicleHistory;
  #vehicles?: Vehicles;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "APIBARA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ApibaraClient/1.1.2 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.1.2", schema: s.string() },
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
   * Durable, sequence-ordered material vehicle changes for reliable synchronization and replay.
   */
  get changeStream(): ChangeStream {
    return (this.#changeStream ??= new ChangeStream(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Available filters metadata.
   */
  get filters(): Filters {
    return (this.#filters ??= new Filters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Proxy supported auction vehicle images.
   */
  get imageProxy(): ImageProxy {
    return (this.#imageProxy ??= new ImageProxy(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Auction facility and location search.
   */
  get locations(): Locations {
    return (this.#locations ??= new Locations(this.#rawClient, this.#servers, this.#auth));
  }

  get market(): Market {
    return (this.#market ??= new Market(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Related and similar auction vehicles.
   */
  get relatedVehicles(): RelatedVehicles {
    return (this.#relatedVehicles ??= new RelatedVehicles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Auction-to-port delivery prices.
   */
  get shipping(): Shipping {
    return (this.#shipping ??= new Shipping(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resolve vehicle details from auction URLs.
   */
  get urlTools(): UrlTools {
    return (this.#urlTools ??= new UrlTools(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API usage and plan limit information.
   */
  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers, this.#auth));
  }

  get vehicleAuction(): VehicleAuction {
    return (this.#vehicleAuction ??= new VehicleAuction(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * VIN and lot auction history.
   */
  get vehicleHistory(): VehicleHistory {
    return (this.#vehicleHistory ??= new VehicleHistory(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search and retrieve vehicle auction records.
   */
  get vehicles(): Vehicles {
    return (this.#vehicles ??= new Vehicles(this.#rawClient, this.#servers, this.#auth));
  }
}
