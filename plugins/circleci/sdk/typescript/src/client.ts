import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ArtifactApi } from "./resources/artifact-api.js";
import { BuildApi } from "./resources/build-api.js";
import { ContextApi } from "./resources/context-api.js";
import { Insights } from "./resources/insights.js";
import { JobApi } from "./resources/job-api.js";
import { PipelineApi } from "./resources/pipeline-api.js";
import { ProjectApi } from "./resources/project-api.js";
import { ResourceClassApi } from "./resources/resource-class-api.js";
import { RunnerApi } from "./resources/runner-api.js";
import { RunnerTask } from "./resources/runner-task.js";
import { ScheduleApi } from "./resources/schedule-api.js";
import { SshKey } from "./resources/ssh-key.js";
import { TestMetadataApi } from "./resources/test-metadata-api.js";
import { UserApi } from "./resources/user-api.js";
import { Webhook } from "./resources/webhook.js";
import { WorkflowApi } from "./resources/workflow-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The CircleCI REST API v1 is the legacy API that provides access to build information, project
 * details, and user data. While still available, CircleCI recommends migrating to the v2 API for
 * newer features and improved functionality. The v1 API supports operations for retrieving build
 * details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is
 * handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v2
 * provides programmatic access to CircleCI services for managing pipelines, projects, workflows,
 * jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and
 * environment variables, and access usage reports. The API uses token-based authentication via a
 * Circle-Token header and returns JSON responses. It supports operations for project configuration,
 * workflow management, artifact retrieval, and insights into build performance., The CircleCI REST
 * API v2 provides programmatic access to CircleCI services for managing pipelines, projects,
 * workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage
 * contexts and environment variables, and access usage reports. The API uses token-based
 * authentication via a Circle-Token header and returns JSON responses. It supports operations for
 * project configuration, workflow management, artifact retrieval, and insights into build
 * performance., The CircleCI REST API v2 provides programmatic access to CircleCI services for
 * managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines,
 * retrieve build status, manage contexts and environment variables, and access usage reports. The
 * API uses token-based authentication via a Circle-Token header and returns JSON responses. It
 * supports operations for project configuration, workflow management, artifact retrieval, and
 * insights into build performance., The CircleCI REST API v2 provides programmatic access to
 * CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can
 * trigger pipelines, retrieve build status, manage contexts and environment variables, and access
 * usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON
 * responses. It supports operations for project configuration, workflow management, artifact
 * retrieval, and insights into build performance., Operations tagged Project across 2 of this
 * provider's published API definitions: circleci-rest-api-v1-openapi.yml,
 * circleci-rest-api-v2-openapi.yml. Each path carries the servers of the definition it was
 * published in., The CircleCI REST API v1 is the legacy API that provides access to build
 * information, project details, and user data. While still available, CircleCI recommends migrating
 * to the v2 API for newer features and improved functionality. The v1 API supports operations for
 * retrieving build details, triggering builds, managing SSH keys, and accessing test metadata.
 * Authentication is handled through API tokens passed as query parameters or HTTP headers., The
 * CircleCI REST API v1 is the legacy API that provides access to build information, project
 * details, and user data. While still available, CircleCI recommends migrating to the v2 API for
 * newer features and improved functionality. The v1 API supports operations for retrieving build
 * details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is
 * handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v2
 * provides programmatic access to CircleCI services for managing pipelines, projects, workflows,
 * jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and
 * environment variables, and access usage reports. The API uses token-based authentication via a
 * Circle-Token header and returns JSON responses. It supports operations for project configuration,
 * workflow management, artifact retrieval, and insights into build performance., The CircleCI REST
 * API v1 is the legacy API that provides access to build information, project details, and user
 * data. While still available, CircleCI recommends migrating to the v2 API for newer features and
 * improved functionality. The v1 API supports operations for retrieving build details, triggering
 * builds, managing SSH keys, and accessing test metadata. Authentication is handled through API
 * tokens passed as query parameters or HTTP headers., The CircleCI REST API v1 is the legacy API
 * that provides access to build information, project details, and user data. While still available,
 * CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1
 * API supports operations for retrieving build details, triggering builds, managing SSH keys, and
 * accessing test metadata. Authentication is handled through API tokens passed as query parameters
 * or HTTP headers., Operations tagged User across 2 of this provider's published API definitions:
 * circleci-rest-api-v1-openapi.yml, circleci-rest-api-v2-openapi.yml. Each path carries the servers
 * of the definition it was published in., The CircleCI REST API v2 provides programmatic access to
 * CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can
 * trigger pipelines, retrieve build status, manage contexts and environment variables, and access
 * usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON
 * responses. It supports operations for project configuration, workflow management, artifact
 * retrieval, and insights into build performance., The CircleCI REST API v2 provides programmatic
 * access to CircleCI services for managing pipelines, projects, workflows, jobs, and users.
 * Developers can trigger pipelines, retrieve build status, manage contexts and environment
 * variables, and access usage reports. The API uses token-based authentication via a Circle-Token
 * header and returns JSON responses. It supports operations for project configuration, workflow
 * management, artifact retrieval, and insights into build performance., The CircleCI REST API v1 is
 * the legacy API that provides access to build information, project details, and user data. While
 * still available, CircleCI recommends migrating to the v2 API for newer features and improved
 * functionality. The v1 API supports operations for retrieving build details, triggering builds,
 * managing SSH keys, and accessing test metadata. Authentication is handled through API tokens
 * passed as query parameters or HTTP headers.
 */
export class CircleCiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #artifactApi?: ArtifactApi;
  #buildApi?: BuildApi;
  #contextApi?: ContextApi;
  #insights?: Insights;
  #jobApi?: JobApi;
  #pipelineApi?: PipelineApi;
  #projectApi?: ProjectApi;
  #resourceClassApi?: ResourceClassApi;
  #runnerTask?: RunnerTask;
  #scheduleApi?: ScheduleApi;
  #sshKey?: SshKey;
  #testMetadataApi?: TestMetadataApi;
  #userApi?: UserApi;
  #webhook?: Webhook;
  #workflowApi?: WorkflowApi;
  #runnerApi?: RunnerApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CIRCLE_CI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CircleCiClient/1.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.1.0", schema: s.string() },
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
   * Endpoints for listing and downloading build artifacts.
   */
  get artifactApi(): ArtifactApi {
    return (this.#artifactApi ??= new ArtifactApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving build details, triggering builds, retrying builds, and canceling
   * builds.
   */
  get buildApi(): BuildApi {
    return (this.#buildApi ??= new BuildApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing contexts, which are used to secure and share environment variables
   * across projects.
   */
  get contextApi(): ContextApi {
    return (this.#contextApi ??= new ContextApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving workflow and job metrics, summary data, and test performance insights.
   */
  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving job details, artifacts, and test metadata associated with pipeline
   * jobs.
   */
  get jobApi(): JobApi {
    return (this.#jobApi ??= new JobApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for triggering, retrieving, and managing pipelines and their configurations.
   */
  get pipelineApi(): PipelineApi {
    return (this.#pipelineApi ??= new PipelineApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for listing followed projects and managing project settings.
   */
  get projectApi(): ProjectApi {
    return (this.#projectApi ??= new ProjectApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing runner resource classes, which define the compute resources available
   * for self-hosted runner jobs.
   */
  get resourceClassApi(): ResourceClassApi {
    return (this.#resourceClassApi ??= new ResourceClassApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for querying task counts and managing tasks assigned to self-hosted runners.
   */
  get runnerTask(): RunnerTask {
    return (this.#runnerTask ??= new RunnerTask(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for creating, updating, and managing scheduled pipeline triggers.
   */
  get scheduleApi(): ScheduleApi {
    return (this.#scheduleApi ??= new ScheduleApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing SSH keys and checkout keys for projects.
   */
  get sshKey(): SshKey {
    return (this.#sshKey ??= new SshKey(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving test metadata collected during builds.
   */
  get testMetadataApi(): TestMetadataApi {
    return (this.#testMetadataApi ??= new TestMetadataApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving information about the authenticated user.
   */
  get userApi(): UserApi {
    return (this.#userApi ??= new UserApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for creating, updating, listing, and deleting outbound webhook subscriptions.
   */
  get webhook(): Webhook {
    return (this.#webhook ??= new Webhook(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving workflow details, managing workflow status, and rerunning workflows.
   */
  get workflowApi(): WorkflowApi {
    return (this.#workflowApi ??= new WorkflowApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for listing and querying self-hosted runners and their status within a namespace or
   * resource class.
   */
  get runnerApi(): RunnerApi {
    return (this.#runnerApi ??= new RunnerApi(this.#rawClient, this.#servers, this.#auth));
  }
}
