import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Authentication } from "./resources/authentication.js";
import { Chat } from "./resources/chat.js";
import { Delivery } from "./resources/delivery.js";
import { Items } from "./resources/items.js";
import { LastMileDelivery } from "./resources/last-mile-delivery.js";
import { Orders } from "./resources/orders.js";
import { Pickup } from "./resources/pickup.js";
import { Products } from "./resources/products.js";
import { Replacements } from "./resources/replacements.js";
import { Rest } from "./resources/rest.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Instacart Connect Fulfillment API enables retailers to integrate Instacart fulfillment
 * capabilities directly into their e-commerce sites., The Instacart Connect Post-Checkout API
 * allows retailers to provide their customers with real-time order tracking and shopper interaction
 * after an order has been placed., The Instacart Connect Fulfillment API enables retailers to
 * integrate Instacart fulfillment capabilities directly into their e-commerce sites., The Instacart
 * Catalog API enables retailers to programmatically manage their product catalogs on the Instacart
 * platform., The Instacart Connect Fulfillment API enables retailers to integrate Instacart
 * fulfillment capabilities directly into their e-commerce sites., The Instacart Connect
 * Post-Checkout API allows retailers to provide their customers with real-time order tracking and
 * shopper interaction after an order has been placed., The Instacart Connect Fulfillment API
 * enables retailers to integrate Instacart fulfillment capabilities directly into their e-commerce
 * sites., Operations tagged Products across 2 of this provider's published API definitions:
 * instacart-catalog-api-openapi.yml, instacart-developer-platform-api-openapi.yml. Each path
 * carries the servers of the definition it was published in., The Instacart Connect Post-Checkout
 * API allows retailers to provide their customers with real-time order tracking and shopper
 * interaction after an order has been placed., Order from your favorite local grocery stores.
 */
export class InstacartClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authentication?: Authentication;
  #chat?: Chat;
  #delivery?: Delivery;
  #items?: Items;
  #lastMileDelivery?: LastMileDelivery;
  #orders?: Orders;
  #pickup?: Pickup;
  #products?: Products;
  #replacements?: Replacements;
  #rest?: Rest;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "INSTACART_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "InstacartClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
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
   * Endpoints for obtaining and managing OAuth 2.0 access tokens used to authenticate API requests.
   */
  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints for shopper-customer communication including sending and retrieving chat messages.
   */
  get chat(): Chat {
    return (this.#chat ??= new Chat(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for finding delivery stores, previewing time slots, reserving time slots, and
   * creating delivery orders.
   */
  get delivery(): Delivery {
    return (this.#delivery ??= new Delivery(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for updating item-level attributes such as pricing and availability at specific store
   * locations. Items contain information that can vary from one store to another.
   */
  get items(): Items {
    return (this.#items ??= new Items(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for last mile delivery where items are pre-packed and only require delivery from the
   * store to the customer.
   */
  get lastMileDelivery(): LastMileDelivery {
    return (this.#lastMileDelivery ??= new LastMileDelivery(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving order status, handling details, and item information after checkout.
   */
  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for finding pickup stores, previewing time slots, reserving time slots, and creating
   * pickup orders.
   */
  get pickup(): Pickup {
    return (this.#pickup ??= new Pickup(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for creating and updating products in the retailer's catalog on Instacart. Products
   * are the same across all of a retailer's stores.
   */
  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing item replacements suggested by shoppers during order fulfillment.
   */
  get replacements(): Replacements {
    return (this.#replacements ??= new Replacements(this.#rawClient, this.#servers, this.#auth));
  }

  get rest(): Rest {
    return (this.#rest ??= new Rest(this.#rawClient, this.#servers));
  }
}
