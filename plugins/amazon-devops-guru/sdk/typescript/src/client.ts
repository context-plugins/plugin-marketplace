import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { Anomalies } from "./resources/anomalies.js";
import { Channels } from "./resources/channels.js";
import { CostEstimation } from "./resources/cost-estimation.js";
import { EventSources } from "./resources/event-sources.js";
import { Events } from "./resources/events.js";
import { FeedbackApi } from "./resources/feedback-api.js";
import { Insights } from "./resources/insights.js";
import { ListLogAnomalies } from "./resources/list-log-anomalies.js";
import { MonitoredResources } from "./resources/monitored-resources.js";
import { Organization } from "./resources/organization.js";
import { Recommendations } from "./resources/recommendations.js";
import { ResourceCollections } from "./resources/resource-collections.js";
import { ServiceIntegrations } from "./resources/service-integrations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon DevOps Guru. 3 operation(s)., Generated
 * from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's
 * published Smithy model for Amazon DevOps Guru. 3 operation(s)., Generated from AWS's published
 * Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model
 * for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon
 * DevOps Guru. 1 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru.
 * 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 4
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 5
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2
 * operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2
 * operation(s).
 */
export class AmazonDevOpsGuruClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accounts?: Accounts;
  #anomalies?: Anomalies;
  #channels?: Channels;
  #costEstimation?: CostEstimation;
  #eventSources?: EventSources;
  #events?: Events;
  #feedbackApi?: FeedbackApi;
  #insights?: Insights;
  #listLogAnomalies?: ListLogAnomalies;
  #monitoredResources?: MonitoredResources;
  #organization?: Organization;
  #recommendations?: Recommendations;
  #resourceCollections?: ResourceCollections;
  #serviceIntegrations?: ServiceIntegrations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_DEV_OPS_GURU_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonDevOpsGuruClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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

  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  get anomalies(): Anomalies {
    return (this.#anomalies ??= new Anomalies(this.#rawClient, this.#servers, this.#auth));
  }

  get channels(): Channels {
    return (this.#channels ??= new Channels(this.#rawClient, this.#servers, this.#auth));
  }

  get costEstimation(): CostEstimation {
    return (this.#costEstimation ??= new CostEstimation(this.#rawClient, this.#servers, this.#auth));
  }

  get eventSources(): EventSources {
    return (this.#eventSources ??= new EventSources(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get feedbackApi(): FeedbackApi {
    return (this.#feedbackApi ??= new FeedbackApi(this.#rawClient, this.#servers, this.#auth));
  }

  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  get listLogAnomalies(): ListLogAnomalies {
    return (this.#listLogAnomalies ??= new ListLogAnomalies(this.#rawClient, this.#servers, this.#auth));
  }

  get monitoredResources(): MonitoredResources {
    return (this.#monitoredResources ??= new MonitoredResources(this.#rawClient, this.#servers, this.#auth));
  }

  get organization(): Organization {
    return (this.#organization ??= new Organization(this.#rawClient, this.#servers, this.#auth));
  }

  get recommendations(): Recommendations {
    return (this.#recommendations ??= new Recommendations(this.#rawClient, this.#servers, this.#auth));
  }

  get resourceCollections(): ResourceCollections {
    return (this.#resourceCollections ??= new ResourceCollections(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get serviceIntegrations(): ServiceIntegrations {
    return (this.#serviceIntegrations ??= new ServiceIntegrations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
