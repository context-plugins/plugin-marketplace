import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AggregatesAndCompliance } from "./resources/aggregates-and-compliance.js";
import { AssociationResources } from "./resources/association-resources.js";
import { Associations } from "./resources/associations.js";
import { BulkDelivery } from "./resources/bulk-delivery.js";
import { BulkExport } from "./resources/bulk-export.js";
import { ChangeFeed } from "./resources/change-feed.js";
import { CrossAssociationCollections } from "./resources/cross-association-collections.js";
import { DatasetCatalog } from "./resources/dataset-catalog.js";
import { Meta } from "./resources/meta.js";
import { ProfessionalsAndLicenses } from "./resources/professionals-and-licenses.js";
import { Statutes } from "./resources/statutes.js";
import { Vendors } from "./resources/vendors.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Aggregates and compliance across 2 of this provider's published API
 * definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries
 * the servers of the definition it was published in., Operations tagged Association resources
 * across 2 of this provider's published API definitions: commonelements-com-openapi.json,
 * commonelements-com-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Associations across 2 of this provider's published API definitions:
 * commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Bulk delivery across 2 of this provider's
 * published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Bulk export
 * across 2 of this provider's published API definitions: commonelements-com-openapi.json,
 * commonelements-com-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Change feed across 2 of this provider's published API definitions:
 * commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Cross-association collections across 2 of
 * this provider's published API definitions: commonelements-com-openapi.json,
 * commonelements-com-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Dataset catalog across 2 of this provider's published API definitions:
 * commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Meta across 2 of this provider's published
 * API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path
 * carries the servers of the definition it was published in., Operations tagged Professionals and
 * licenses across 2 of this provider's published API definitions: commonelements-com-openapi.json,
 * commonelements-com-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Statutes across 2 of this provider's published API definitions:
 * commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Vendors across 2 of this provider's
 * published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each
 * path carries the servers of the definition it was published in.
 */
export class CommonElementsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #aggregatesAndCompliance?: AggregatesAndCompliance;
  #associationResources?: AssociationResources;
  #associations?: Associations;
  #bulkDelivery?: BulkDelivery;
  #bulkExport?: BulkExport;
  #changeFeed?: ChangeFeed;
  #crossAssociationCollections?: CrossAssociationCollections;
  #datasetCatalog?: DatasetCatalog;
  #meta?: Meta;
  #professionalsAndLicenses?: ProfessionalsAndLicenses;
  #statutes?: Statutes;
  #vendors?: Vendors;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "COMMON_ELEMENTS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CommonElementsClient/1.4.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.4.0", schema: s.string() },
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

  get aggregatesAndCompliance(): AggregatesAndCompliance {
    return (this.#aggregatesAndCompliance ??= new AggregatesAndCompliance(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Public record joined to one association: parcels, structures, permits, code enforcement,
   * hazards, insurance, legal, financials, governance and documents. Same request shape for every
   * one, so a client written against one works against all ten.
   */
  get associationResources(): AssociationResources {
    return (this.#associationResources ??= new AssociationResources(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get associations(): Associations {
    return (this.#associations ??= new Associations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Asynchronous exports for datasets larger than one HTTP response. Request, poll, download a
   * durable artifact with a manifest and a column dictionary beside it — or put it on a schedule
   * and stop asking. Growth plan and above.
   */
  get bulkDelivery(): BulkDelivery {
    return (this.#bulkDelivery ??= new BulkDelivery(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Stream a full dataset as CSV or JSON. Growth plan or higher.
   */
  get bulkExport(): BulkExport {
    return (this.#bulkExport ??= new BulkExport(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * What changed, and when. The rest of the API describes the association graph as it stands today;
   * this describes it moving.
   */
  get changeFeed(): ChangeFeed {
    return (this.#changeFeed ??= new ChangeFeed(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The same corpora queried across associations, where the buyer genuinely asks the question that
   * way and an indexed filter exists to answer it.
   */
  get crossAssociationCollections(): CrossAssociationCollections {
    return (this.#crossAssociationCollections ??= new CrossAssociationCollections(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * What the platform holds, and what it holds for one association. Start here: the catalog names
   * every resource, the plan it needs, and the caveat that stops an unmatched jurisdiction reading
   * as a clean record.
   */
  get datasetCatalog(): DatasetCatalog {
    return (this.#datasetCatalog ??= new DatasetCatalog(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Spec, status, usage, and the data dictionary.
   */
  get meta(): Meta {
    return (this.#meta ??= new Meta(this.#rawClient, this.#servers, this.#auth));
  }

  get professionalsAndLicenses(): ProfessionalsAndLicenses {
    return (this.#professionalsAndLicenses ??= new ProfessionalsAndLicenses(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get statutes(): Statutes {
    return (this.#statutes ??= new Statutes(this.#rawClient, this.#servers, this.#auth));
  }

  get vendors(): Vendors {
    return (this.#vendors ??= new Vendors(this.#rawClient, this.#servers, this.#auth));
  }
}
