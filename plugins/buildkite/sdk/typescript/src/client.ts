import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccessToken } from "./resources/access-token.js";
import { AgentTokens } from "./resources/agent-tokens.js";
import { AgentsApi } from "./resources/agents-api.js";
import { Annotations } from "./resources/annotations.js";
import { Artifacts } from "./resources/artifacts.js";
import { Builds } from "./resources/builds.js";
import { Clusters } from "./resources/clusters.js";
import { Emojis } from "./resources/emojis.js";
import { JobsApi } from "./resources/jobs-api.js";
import { Meta } from "./resources/meta.js";
import { Metrics } from "./resources/metrics.js";
import { Organizations } from "./resources/organizations.js";
import { PipelineTemplates } from "./resources/pipeline-templates.js";
import { Pipelines } from "./resources/pipelines.js";
import { Queues } from "./resources/queues.js";
import { Rules } from "./resources/rules.js";
import { Stacks } from "./resources/stacks.js";
import { Teams } from "./resources/teams.js";
import { UserApi } from "./resources/user-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Programmatic control of Buildkite Pipelines covering organizations, pipelines, builds, jobs,
 * artifacts, annotations, agents, clusters, queues, and access tokens. Authenticated with a Bearer
 * API access token., Public subset of the Buildkite Agent API consumed by the open-source agent
 * (Go) to register, accept, and finish jobs. Most endpoints are reserved for internal use; only the
 * documented public endpoints are stable. Authenticated with an Agent Token (`Authorization: Token
 * `)., Programmatic control of Buildkite Pipelines covering organizations, pipelines, builds, jobs,
 * artifacts, annotations, agents, clusters, queues, and access tokens. Authenticated with a Bearer
 * API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
 * builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens. Authenticated
 * with a Bearer API access token., Programmatic control of Buildkite Pipelines covering
 * organizations, pipelines, builds, jobs, artifacts, annotations, agents, clusters, queues, and
 * access tokens. Authenticated with a Bearer API access token., Programmatic control of Buildkite
 * Pipelines covering organizations, pipelines, builds, jobs, artifacts, annotations, agents,
 * clusters, queues, and access tokens. Authenticated with a Bearer API access token., Programmatic
 * control of Buildkite Pipelines covering organizations, pipelines, builds, jobs, artifacts,
 * annotations, agents, clusters, queues, and access tokens. Authenticated with a Bearer API access
 * token., Public subset of the Buildkite Agent API consumed by the open-source agent (Go) to
 * register, accept, and finish jobs. Most endpoints are reserved for internal use; only the
 * documented public endpoints are stable. Authenticated with an Agent Token (`Authorization: Token
 * `)., Programmatic control of Buildkite Pipelines covering organizations, pipelines, builds, jobs,
 * artifacts, annotations, agents, clusters, queues, and access tokens. Authenticated with a Bearer
 * API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
 * builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens. Authenticated
 * with a Bearer API access token.
 */
export class BuildkiteClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accessToken?: AccessToken;
  #agentTokens?: AgentTokens;
  #agentsApi?: AgentsApi;
  #annotations?: Annotations;
  #artifacts?: Artifacts;
  #builds?: Builds;
  #clusters?: Clusters;
  #emojis?: Emojis;
  #jobsApi?: JobsApi;
  #meta?: Meta;
  #metrics?: Metrics;
  #organizations?: Organizations;
  #pipelineTemplates?: PipelineTemplates;
  #pipelines?: Pipelines;
  #queues?: Queues;
  #rules?: Rules;
  #stacks?: Stacks;
  #teams?: Teams;
  #userApi?: UserApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BUILDKITE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BuildkiteClient/2.0.0 TypeScript", schema: s.string() },
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

  get accessToken(): AccessToken {
    return (this.#accessToken ??= new AccessToken(this.#rawClient, this.#servers, this.#auth));
  }

  get agentTokens(): AgentTokens {
    return (this.#agentTokens ??= new AgentTokens(this.#rawClient, this.#servers, this.#auth));
  }

  get agentsApi(): AgentsApi {
    return (this.#agentsApi ??= new AgentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get annotations(): Annotations {
    return (this.#annotations ??= new Annotations(this.#rawClient, this.#servers, this.#auth));
  }

  get artifacts(): Artifacts {
    return (this.#artifacts ??= new Artifacts(this.#rawClient, this.#servers, this.#auth));
  }

  get builds(): Builds {
    return (this.#builds ??= new Builds(this.#rawClient, this.#servers, this.#auth));
  }

  get clusters(): Clusters {
    return (this.#clusters ??= new Clusters(this.#rawClient, this.#servers, this.#auth));
  }

  get emojis(): Emojis {
    return (this.#emojis ??= new Emojis(this.#rawClient, this.#servers, this.#auth));
  }

  get jobsApi(): JobsApi {
    return (this.#jobsApi ??= new JobsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get meta(): Meta {
    return (this.#meta ??= new Meta(this.#rawClient, this.#servers, this.#auth));
  }

  get metrics(): Metrics {
    return (this.#metrics ??= new Metrics(this.#rawClient, this.#servers, this.#auth));
  }

  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  get pipelineTemplates(): PipelineTemplates {
    return (this.#pipelineTemplates ??= new PipelineTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  get pipelines(): Pipelines {
    return (this.#pipelines ??= new Pipelines(this.#rawClient, this.#servers, this.#auth));
  }

  get queues(): Queues {
    return (this.#queues ??= new Queues(this.#rawClient, this.#servers, this.#auth));
  }

  get rules(): Rules {
    return (this.#rules ??= new Rules(this.#rawClient, this.#servers, this.#auth));
  }

  get stacks(): Stacks {
    return (this.#stacks ??= new Stacks(this.#rawClient, this.#servers, this.#auth));
  }

  get teams(): Teams {
    return (this.#teams ??= new Teams(this.#rawClient, this.#servers, this.#auth));
  }

  get userApi(): UserApi {
    return (this.#userApi ??= new UserApi(this.#rawClient, this.#servers, this.#auth));
  }
}
