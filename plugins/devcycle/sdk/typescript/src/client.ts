import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Audiences } from "./resources/audiences.js";
import { AuditLog } from "./resources/audit-log.js";
import { BetaSemanticPatch } from "./resources/beta-semantic-patch.js";
import { BucketingApi } from "./resources/bucketing-api.js";
import { CustomProperties } from "./resources/custom-properties.js";
import { DeprecatedFeaturesV1 } from "./resources/deprecated-features-v1.js";
import { EdgeDb } from "./resources/edge-db.js";
import { Environments } from "./resources/environments.js";
import { FeatureChangeRequests } from "./resources/feature-change-requests.js";
import { FeatureConfigurations } from "./resources/feature-configurations.js";
import { FeatureOptIn } from "./resources/feature-opt-in.js";
import { FeaturesV2 } from "./resources/features-v2.js";
import { IntegrationsDynatrace } from "./resources/integrations-dynatrace.js";
import { IntegrationsJira } from "./resources/integrations-jira.js";
import { MetricAssociations } from "./resources/metric-associations.js";
import { Metrics } from "./resources/metrics.js";
import { OpenFeatureRemoteEvaluationApiOfrep } from "./resources/open-feature-remote-evaluation-api-ofrep.js";
import { Overrides } from "./resources/overrides.js";
import { ProjectChangeRequests } from "./resources/project-change-requests.js";
import { Projects } from "./resources/projects.js";
import { Results } from "./resources/results.js";
import { UserProfiles } from "./resources/user-profiles.js";
import { VariablesApi } from "./resources/variables-api.js";
import { Variations } from "./resources/variations.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * An API for managing features and variables on the DevCycle platform., Documents the DevCycle
 * Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to
 * use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An
 * API for managing features and variables on the DevCycle platform., Documents the DevCycle
 * Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to
 * use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An
 * API for managing features and variables on the DevCycle platform., An API for managing features
 * and variables on the DevCycle platform., Documents the DevCycle Bucketing API which provides an
 * API interface to User Bucketing and for Server SDKs configured to use Cloud Bucketing., An API
 * for managing features and variables on the DevCycle platform., An API for managing features and
 * variables on the DevCycle platform., An API for managing features and variables on the DevCycle
 * platform., An API for managing features and variables on the DevCycle platform., An API for
 * managing features and variables on the DevCycle platform., Documents the DevCycle Bucketing API
 * which provides an API interface to User Bucketing and for Server SDKs configured to use Cloud
 * Bucketing., An API for managing features and variables on the DevCycle platform., An API for
 * managing features and variables on the DevCycle platform., An API for managing features and
 * variables on the DevCycle platform., An API for managing features and variables on the DevCycle
 * platform., An API for managing features and variables on the DevCycle platform., An API for
 * managing features and variables on the DevCycle platform., An API for managing features and
 * variables on the DevCycle platform., An API for managing features and variables on the DevCycle
 * platform.
 */
export class DevCycleClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #audiences?: Audiences;
  #auditLog?: AuditLog;
  #betaSemanticPatch?: BetaSemanticPatch;
  #bucketingApi?: BucketingApi;
  #customProperties?: CustomProperties;
  #deprecatedFeaturesV1?: DeprecatedFeaturesV1;
  #edgeDb?: EdgeDb;
  #environments?: Environments;
  #featureChangeRequests?: FeatureChangeRequests;
  #featureConfigurations?: FeatureConfigurations;
  #featureOptIn?: FeatureOptIn;
  #featuresV2?: FeaturesV2;
  #integrationsDynatrace?: IntegrationsDynatrace;
  #integrationsJira?: IntegrationsJira;
  #metricAssociations?: MetricAssociations;
  #metrics?: Metrics;
  #openFeatureRemoteEvaluationApiOfrep?: OpenFeatureRemoteEvaluationApiOfrep;
  #overrides?: Overrides;
  #projectChangeRequests?: ProjectChangeRequests;
  #projects?: Projects;
  #results?: Results;
  #userProfiles?: UserProfiles;
  #variablesApi?: VariablesApi;
  #variations?: Variations;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DEV_CYCLE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DevCycleClient/1.0.0 TypeScript", schema: s.string() },
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

  get audiences(): Audiences {
    return (this.#audiences ??= new Audiences(this.#rawClient, this.#servers));
  }

  get auditLog(): AuditLog {
    return (this.#auditLog ??= new AuditLog(this.#rawClient, this.#servers));
  }

  get betaSemanticPatch(): BetaSemanticPatch {
    return (this.#betaSemanticPatch ??= new BetaSemanticPatch(this.#rawClient, this.#servers));
  }

  get bucketingApi(): BucketingApi {
    return (this.#bucketingApi ??= new BucketingApi(this.#rawClient, this.#servers, this.#auth));
  }

  get customProperties(): CustomProperties {
    return (this.#customProperties ??= new CustomProperties(this.#rawClient, this.#servers));
  }

  get deprecatedFeaturesV1(): DeprecatedFeaturesV1 {
    return (this.#deprecatedFeaturesV1 ??= new DeprecatedFeaturesV1(this.#rawClient, this.#servers));
  }

  get edgeDb(): EdgeDb {
    return (this.#edgeDb ??= new EdgeDb(this.#rawClient, this.#servers));
  }

  get environments(): Environments {
    return (this.#environments ??= new Environments(this.#rawClient, this.#servers));
  }

  get featureChangeRequests(): FeatureChangeRequests {
    return (this.#featureChangeRequests ??= new FeatureChangeRequests(this.#rawClient, this.#servers));
  }

  get featureConfigurations(): FeatureConfigurations {
    return (this.#featureConfigurations ??= new FeatureConfigurations(this.#rawClient, this.#servers));
  }

  get featureOptIn(): FeatureOptIn {
    return (this.#featureOptIn ??= new FeatureOptIn(this.#rawClient, this.#servers));
  }

  get featuresV2(): FeaturesV2 {
    return (this.#featuresV2 ??= new FeaturesV2(this.#rawClient, this.#servers));
  }

  get integrationsDynatrace(): IntegrationsDynatrace {
    return (this.#integrationsDynatrace ??= new IntegrationsDynatrace(this.#rawClient, this.#servers));
  }

  get integrationsJira(): IntegrationsJira {
    return (this.#integrationsJira ??= new IntegrationsJira(this.#rawClient, this.#servers));
  }

  get metricAssociations(): MetricAssociations {
    return (this.#metricAssociations ??= new MetricAssociations(this.#rawClient, this.#servers));
  }

  get metrics(): Metrics {
    return (this.#metrics ??= new Metrics(this.#rawClient, this.#servers));
  }

  /**
   * See the OpenFeature documentation for more information:
   * https://github.com/open-feature/protocol
   */
  get openFeatureRemoteEvaluationApiOfrep(): OpenFeatureRemoteEvaluationApiOfrep {
    return (this.#openFeatureRemoteEvaluationApiOfrep ??= new OpenFeatureRemoteEvaluationApiOfrep(
      this.#rawClient,
      this.#servers,
    ));
  }

  get overrides(): Overrides {
    return (this.#overrides ??= new Overrides(this.#rawClient, this.#servers));
  }

  get projectChangeRequests(): ProjectChangeRequests {
    return (this.#projectChangeRequests ??= new ProjectChangeRequests(this.#rawClient, this.#servers));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers));
  }

  get results(): Results {
    return (this.#results ??= new Results(this.#rawClient, this.#servers));
  }

  get userProfiles(): UserProfiles {
    return (this.#userProfiles ??= new UserProfiles(this.#rawClient, this.#servers));
  }

  get variablesApi(): VariablesApi {
    return (this.#variablesApi ??= new VariablesApi(this.#rawClient, this.#servers));
  }

  get variations(): Variations {
    return (this.#variations ??= new Variations(this.#rawClient, this.#servers));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers));
  }
}
