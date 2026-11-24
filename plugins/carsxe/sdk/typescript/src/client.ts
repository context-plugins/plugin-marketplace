import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Auth } from "./resources/auth.js";
import { History } from "./resources/history.js";
import { Images } from "./resources/images.js";
import { LienTheft } from "./resources/lien-theft.js";
import { MarketValue } from "./resources/market-value.js";
import { PlateDecoder } from "./resources/plate-decoder.js";
import { Recalls } from "./resources/recalls.js";
import { Recognition } from "./resources/recognition.js";
import { Specifications } from "./resources/specifications.js";
import { YearMakeModel } from "./resources/year-make-model.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * CarsXE is a vehicle data API platform offering VIN decoding, vehicle specifications, market
 * value, license plate decoding, vehicle recalls and related lookups. All endpoints accept an API
 * key as a query string parameter `key`., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE
 * is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC.,
 * CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves,
 * LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by
 * PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data
 * API by PiWaves, LLC.
 */
export class CarsXeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #auth2?: Auth;
  #history?: History;
  #images?: Images;
  #lienTheft?: LienTheft;
  #marketValue?: MarketValue;
  #plateDecoder?: PlateDecoder;
  #recalls?: Recalls;
  #recognition?: Recognition;
  #specifications?: Specifications;
  #yearMakeModel?: YearMakeModel;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CARS_XE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CarsXeClient/1.0.0 TypeScript", schema: s.string() },
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

  get auth2(): Auth {
    return (this.#auth2 ??= new Auth(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Vehicle history reports
   */
  get history(): History {
    return (this.#history ??= new History(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Vehicle images by make/model
   */
  get images(): Images {
    return (this.#images ??= new Images(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Lien and theft records by VIN
   */
  get lienTheft(): LienTheft {
    return (this.#lienTheft ??= new LienTheft(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Vehicle market value by VIN
   */
  get marketValue(): MarketValue {
    return (this.#marketValue ??= new MarketValue(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Decode license plates into vehicle data
   */
  get plateDecoder(): PlateDecoder {
    return (this.#plateDecoder ??= new PlateDecoder(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Safety recalls by VIN, including bulk batches
   */
  get recalls(): Recalls {
    return (this.#recalls ??= new Recalls(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Plate and VIN recognition from images
   */
  get recognition(): Recognition {
    return (this.#recognition ??= new Recognition(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * VIN decoding and vehicle specifications
   */
  get specifications(): Specifications {
    return (this.#specifications ??= new Specifications(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Year/make/model and OBD code endpoints
   */
  get yearMakeModel(): YearMakeModel {
    return (this.#yearMakeModel ??= new YearMakeModel(this.#rawClient, this.#servers, this.#auth));
  }
}
