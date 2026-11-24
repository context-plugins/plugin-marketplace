import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Creategroup } from "./resources/creategroup.js";
import { Createsamplingrule } from "./resources/createsamplingrule.js";
import { DeleteGroup } from "./resources/delete-group.js";
import { Deleteresourcepolicy } from "./resources/deleteresourcepolicy.js";
import { Deletesamplingrule } from "./resources/deletesamplingrule.js";
import { EncryptionconfigApi } from "./resources/encryptionconfig-api.js";
import { GetGroup } from "./resources/get-group.js";
import { Getsamplingrules } from "./resources/getsamplingrules.js";
import { Groups } from "./resources/groups.js";
import { InsightApi } from "./resources/insight-api.js";
import { Insightevents } from "./resources/insightevents.js";
import { Insightimpactgraph } from "./resources/insightimpactgraph.js";
import { Insightsummaries } from "./resources/insightsummaries.js";
import { ListTagsForResource } from "./resources/list-tags-for-resource.js";
import { Listresourcepolicies } from "./resources/listresourcepolicies.js";
import { Operations } from "./resources/operations.js";
import { Putencryptionconfig } from "./resources/putencryptionconfig.js";
import { Putresourcepolicy } from "./resources/putresourcepolicy.js";
import { Sampling } from "./resources/sampling.js";
import { Samplingstatisticsummaries } from "./resources/samplingstatisticsummaries.js";
import { Samplingtargets } from "./resources/samplingtargets.js";
import { ServiceGraph } from "./resources/service-graph.js";
import { TagResource } from "./resources/tag-resource.js";
import { Telemetryrecords } from "./resources/telemetryrecords.js";
import { TimeseriesservicestatisticsApi } from "./resources/timeseriesservicestatistics-api.js";
import { Tracegraph } from "./resources/tracegraph.js";
import { Traces } from "./resources/traces.js";
import { Tracesegments } from "./resources/tracesegments.js";
import { Tracesummaries } from "./resources/tracesummaries.js";
import { UntagResource } from "./resources/untag-resource.js";
import { UpdateGroup } from "./resources/update-group.js";
import { Updatesamplingrule } from "./resources/updatesamplingrule.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's
 * published Smithy model for AWS X-Ray. 8 operation(s)., Generated from AWS's published Smithy
 * model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray.
 * 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s).,
 * Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's
 * published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy
 * model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray.
 * 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s).,
 * Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's
 * published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy
 * model for AWS X-Ray. 2 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray.
 * 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s).,
 * Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's
 * published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy
 * model for AWS X-Ray. 1 operation(s).
 */
export class AwsXRayClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #creategroup?: Creategroup;
  #createsamplingrule?: Createsamplingrule;
  #deleteGroup?: DeleteGroup;
  #deleteresourcepolicy?: Deleteresourcepolicy;
  #deletesamplingrule?: Deletesamplingrule;
  #encryptionconfigApi?: EncryptionconfigApi;
  #getGroup?: GetGroup;
  #getsamplingrules?: Getsamplingrules;
  #groups?: Groups;
  #insightApi?: InsightApi;
  #insightevents?: Insightevents;
  #insightimpactgraph?: Insightimpactgraph;
  #insightsummaries?: Insightsummaries;
  #listTagsForResource?: ListTagsForResource;
  #listresourcepolicies?: Listresourcepolicies;
  #operations?: Operations;
  #putencryptionconfig?: Putencryptionconfig;
  #putresourcepolicy?: Putresourcepolicy;
  #sampling?: Sampling;
  #samplingstatisticsummaries?: Samplingstatisticsummaries;
  #samplingtargets?: Samplingtargets;
  #serviceGraph?: ServiceGraph;
  #tagResource?: TagResource;
  #telemetryrecords?: Telemetryrecords;
  #timeseriesservicestatisticsApi?: TimeseriesservicestatisticsApi;
  #tracegraph?: Tracegraph;
  #traces?: Traces;
  #tracesegments?: Tracesegments;
  #tracesummaries?: Tracesummaries;
  #untagResource?: UntagResource;
  #updateGroup?: UpdateGroup;
  #updatesamplingrule?: Updatesamplingrule;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AWS_XRAY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AwsXRayClient/0.1.0 TypeScript", schema: s.string() },
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

  get creategroup(): Creategroup {
    return (this.#creategroup ??= new Creategroup(this.#rawClient, this.#servers, this.#auth));
  }

  get createsamplingrule(): Createsamplingrule {
    return (this.#createsamplingrule ??= new Createsamplingrule(this.#rawClient, this.#servers, this.#auth));
  }

  get deleteGroup(): DeleteGroup {
    return (this.#deleteGroup ??= new DeleteGroup(this.#rawClient, this.#servers, this.#auth));
  }

  get deleteresourcepolicy(): Deleteresourcepolicy {
    return (this.#deleteresourcepolicy ??= new Deleteresourcepolicy(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get deletesamplingrule(): Deletesamplingrule {
    return (this.#deletesamplingrule ??= new Deletesamplingrule(this.#rawClient, this.#servers, this.#auth));
  }

  get encryptionconfigApi(): EncryptionconfigApi {
    return (this.#encryptionconfigApi ??= new EncryptionconfigApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get getGroup(): GetGroup {
    return (this.#getGroup ??= new GetGroup(this.#rawClient, this.#servers, this.#auth));
  }

  get getsamplingrules(): Getsamplingrules {
    return (this.#getsamplingrules ??= new Getsamplingrules(this.#rawClient, this.#servers, this.#auth));
  }

  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers, this.#auth));
  }

  get insightApi(): InsightApi {
    return (this.#insightApi ??= new InsightApi(this.#rawClient, this.#servers, this.#auth));
  }

  get insightevents(): Insightevents {
    return (this.#insightevents ??= new Insightevents(this.#rawClient, this.#servers, this.#auth));
  }

  get insightimpactgraph(): Insightimpactgraph {
    return (this.#insightimpactgraph ??= new Insightimpactgraph(this.#rawClient, this.#servers, this.#auth));
  }

  get insightsummaries(): Insightsummaries {
    return (this.#insightsummaries ??= new Insightsummaries(this.#rawClient, this.#servers, this.#auth));
  }

  get listTagsForResource(): ListTagsForResource {
    return (this.#listTagsForResource ??= new ListTagsForResource(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get listresourcepolicies(): Listresourcepolicies {
    return (this.#listresourcepolicies ??= new Listresourcepolicies(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get putencryptionconfig(): Putencryptionconfig {
    return (this.#putencryptionconfig ??= new Putencryptionconfig(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get putresourcepolicy(): Putresourcepolicy {
    return (this.#putresourcepolicy ??= new Putresourcepolicy(this.#rawClient, this.#servers, this.#auth));
  }

  get sampling(): Sampling {
    return (this.#sampling ??= new Sampling(this.#rawClient, this.#servers, this.#auth));
  }

  get samplingstatisticsummaries(): Samplingstatisticsummaries {
    return (this.#samplingstatisticsummaries ??= new Samplingstatisticsummaries(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get samplingtargets(): Samplingtargets {
    return (this.#samplingtargets ??= new Samplingtargets(this.#rawClient, this.#servers, this.#auth));
  }

  get serviceGraph(): ServiceGraph {
    return (this.#serviceGraph ??= new ServiceGraph(this.#rawClient, this.#servers, this.#auth));
  }

  get tagResource(): TagResource {
    return (this.#tagResource ??= new TagResource(this.#rawClient, this.#servers, this.#auth));
  }

  get telemetryrecords(): Telemetryrecords {
    return (this.#telemetryrecords ??= new Telemetryrecords(this.#rawClient, this.#servers, this.#auth));
  }

  get timeseriesservicestatisticsApi(): TimeseriesservicestatisticsApi {
    return (this.#timeseriesservicestatisticsApi ??= new TimeseriesservicestatisticsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get tracegraph(): Tracegraph {
    return (this.#tracegraph ??= new Tracegraph(this.#rawClient, this.#servers, this.#auth));
  }

  get traces(): Traces {
    return (this.#traces ??= new Traces(this.#rawClient, this.#servers, this.#auth));
  }

  get tracesegments(): Tracesegments {
    return (this.#tracesegments ??= new Tracesegments(this.#rawClient, this.#servers, this.#auth));
  }

  get tracesummaries(): Tracesummaries {
    return (this.#tracesummaries ??= new Tracesummaries(this.#rawClient, this.#servers, this.#auth));
  }

  get untagResource(): UntagResource {
    return (this.#untagResource ??= new UntagResource(this.#rawClient, this.#servers, this.#auth));
  }

  get updateGroup(): UpdateGroup {
    return (this.#updateGroup ??= new UpdateGroup(this.#rawClient, this.#servers, this.#auth));
  }

  get updatesamplingrule(): Updatesamplingrule {
    return (this.#updatesamplingrule ??= new Updatesamplingrule(this.#rawClient, this.#servers, this.#auth));
  }
}
