import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Builds } from "./resources/builds.js";
import { ByokCredentials } from "./resources/byok-credentials.js";
import { Checks } from "./resources/checks.js";
import { Completions } from "./resources/completions.js";
import { Data } from "./resources/data.js";
import { EnvVars } from "./resources/env-vars.js";
import { Imports } from "./resources/imports.js";
import { Inference } from "./resources/inference.js";
import { Instances } from "./resources/instances.js";
import { Jobs } from "./resources/jobs.js";
import { LimitsApi } from "./resources/limits-api.js";
import { MemberSecrets } from "./resources/member-secrets.js";
import { Models } from "./resources/models.js";
import { OAuth } from "./resources/oauth.js";
import { QaAgents } from "./resources/qa-agents.js";
import { Qa } from "./resources/qa.js";
import { RegistryApi } from "./resources/registry-api.js";
import { Rollouts } from "./resources/rollouts.js";
import { Storage } from "./resources/storage.js";
import { Tasks } from "./resources/tasks.js";
import { Tasksets } from "./resources/tasksets.js";
import { Teams } from "./resources/teams.js";
import { Traces } from "./resources/traces.js";
import { Usage } from "./resources/usage.js";
import { buildServers, type Servers } from "./servers.js";

export class HudClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #builds?: Builds;
  #byokCredentials?: ByokCredentials;
  #checks?: Checks;
  #completions?: Completions;
  #data?: Data;
  #envVars?: EnvVars;
  #imports?: Imports;
  #inference?: Inference;
  #instances?: Instances;
  #jobs?: Jobs;
  #limitsApi?: LimitsApi;
  #memberSecrets?: MemberSecrets;
  #models?: Models;
  #oAuth?: OAuth;
  #qaAgents?: QaAgents;
  #qa?: Qa;
  #registryApi?: RegistryApi;
  #rollouts?: Rollouts;
  #storage?: Storage;
  #tasks?: Tasks;
  #tasksets?: Tasksets;
  #teams?: Teams;
  #traces?: Traces;
  #usage?: Usage;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "HUD_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "HudClient/2.0.0 TypeScript", schema: s.string() },
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
  }

  get builds(): Builds {
    return (this.#builds ??= new Builds(this.#rawClient, this.#servers));
  }

  get byokCredentials(): ByokCredentials {
    return (this.#byokCredentials ??= new ByokCredentials(this.#rawClient, this.#servers));
  }

  get checks(): Checks {
    return (this.#checks ??= new Checks(this.#rawClient, this.#servers));
  }

  get completions(): Completions {
    return (this.#completions ??= new Completions(this.#rawClient, this.#servers));
  }

  get data(): Data {
    return (this.#data ??= new Data(this.#rawClient, this.#servers));
  }

  get envVars(): EnvVars {
    return (this.#envVars ??= new EnvVars(this.#rawClient, this.#servers));
  }

  get imports(): Imports {
    return (this.#imports ??= new Imports(this.#rawClient, this.#servers));
  }

  get inference(): Inference {
    return (this.#inference ??= new Inference(this.#rawClient, this.#servers));
  }

  get instances(): Instances {
    return (this.#instances ??= new Instances(this.#rawClient, this.#servers));
  }

  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers));
  }

  get limitsApi(): LimitsApi {
    return (this.#limitsApi ??= new LimitsApi(this.#rawClient, this.#servers));
  }

  get memberSecrets(): MemberSecrets {
    return (this.#memberSecrets ??= new MemberSecrets(this.#rawClient, this.#servers));
  }

  get models(): Models {
    return (this.#models ??= new Models(this.#rawClient, this.#servers));
  }

  get oAuth(): OAuth {
    return (this.#oAuth ??= new OAuth(this.#rawClient, this.#servers));
  }

  get qaAgents(): QaAgents {
    return (this.#qaAgents ??= new QaAgents(this.#rawClient, this.#servers));
  }

  get qa(): Qa {
    return (this.#qa ??= new Qa(this.#rawClient, this.#servers));
  }

  get registryApi(): RegistryApi {
    return (this.#registryApi ??= new RegistryApi(this.#rawClient, this.#servers));
  }

  get rollouts(): Rollouts {
    return (this.#rollouts ??= new Rollouts(this.#rawClient, this.#servers));
  }

  get storage(): Storage {
    return (this.#storage ??= new Storage(this.#rawClient, this.#servers));
  }

  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers));
  }

  get tasksets(): Tasksets {
    return (this.#tasksets ??= new Tasksets(this.#rawClient, this.#servers));
  }

  get teams(): Teams {
    return (this.#teams ??= new Teams(this.#rawClient, this.#servers));
  }

  get traces(): Traces {
    return (this.#traces ??= new Traces(this.#rawClient, this.#servers));
  }

  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers));
  }
}
