import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { CustomerApIs } from "./resources/customer-ap-is.js";
import { EndUserApIs } from "./resources/end-user-ap-is.js";
import { FlowDispatchService } from "./resources/flow-dispatch-service.js";
import { Health } from "./resources/health.js";
import { InstanceManagement } from "./resources/instance-management.js";
import { InteractionService } from "./resources/interaction-service.js";
import { JourneyExecution } from "./resources/journey-execution.js";
import { OneTimeTokenService } from "./resources/one-time-token-service.js";
import { TaskService } from "./resources/task-service.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * API for Customers and End Users to interact with the GBG GO Next Gen Flow Captain
 */
export class GbgGoNextGenFlowCaptainApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #health?: Health;
  #customerApIs?: CustomerApIs;
  #flowDispatchService?: FlowDispatchService;
  #oneTimeTokenService?: OneTimeTokenService;
  #taskService?: TaskService;
  #instanceManagement?: InstanceManagement;
  #interactionService?: InteractionService;
  #endUserApIs?: EndUserApIs;
  #journeyExecution?: JourneyExecution;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GBG_GO_NEXT_GEN_FLOW_CAPTAIN_API_CLIENT_LOG"),
      defaultHeaders: [
        {
          name: "User-Agent",
          value: "GbgGoNextGenFlowCaptainApiClient/1.0.0 TypeScript",
          schema: s.string(),
        },
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

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get customerApIs(): CustomerApIs {
    return (this.#customerApIs ??= new CustomerApIs(this.#rawClient, this.#servers, this.#auth));
  }

  get flowDispatchService(): FlowDispatchService {
    return (this.#flowDispatchService ??= new FlowDispatchService(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get oneTimeTokenService(): OneTimeTokenService {
    return (this.#oneTimeTokenService ??= new OneTimeTokenService(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taskService(): TaskService {
    return (this.#taskService ??= new TaskService(this.#rawClient, this.#servers, this.#auth));
  }

  get instanceManagement(): InstanceManagement {
    return (this.#instanceManagement ??= new InstanceManagement(this.#rawClient, this.#servers, this.#auth));
  }

  get interactionService(): InteractionService {
    return (this.#interactionService ??= new InteractionService(this.#rawClient, this.#servers, this.#auth));
  }

  get endUserApIs(): EndUserApIs {
    return (this.#endUserApIs ??= new EndUserApIs(this.#rawClient, this.#servers, this.#auth));
  }

  get journeyExecution(): JourneyExecution {
    return (this.#journeyExecution ??= new JourneyExecution(this.#rawClient, this.#servers));
  }
}
