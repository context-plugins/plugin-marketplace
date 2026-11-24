import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Alerts } from "./resources/alerts.js";
import { AppInventory } from "./resources/app-inventory.js";
import { Assets } from "./resources/assets.js";
import { AuditLogs } from "./resources/audit-logs.js";
import { Automations } from "./resources/automations.js";
import { Classification } from "./resources/classification.js";
import { Digitization } from "./resources/digitization.js";
import { Discovery } from "./resources/discovery.js";
import { Entities } from "./resources/entities.js";
import { Extraction } from "./resources/extraction.js";
import { Folders } from "./resources/folders.js";
import { Groups } from "./resources/groups.js";
import { Jobs } from "./resources/jobs.js";
import { Licenses } from "./resources/licenses.js";
import { Machines } from "./resources/machines.js";
import { Packages } from "./resources/packages.js";
import { Pipeline } from "./resources/pipeline.js";
import { Processes } from "./resources/processes.js";
import { Projects } from "./resources/projects.js";
import { QueueItems } from "./resources/queue-items.js";
import { Queues } from "./resources/queues.js";
import { Requirements } from "./resources/requirements.js";
import { Robots } from "./resources/robots.js";
import { Roles } from "./resources/roles.js";
import { Schedules } from "./resources/schedules.js";
import { StorageBuckets } from "./resources/storage-buckets.js";
import { TestCases } from "./resources/test-cases.js";
import { TestExecutions } from "./resources/test-executions.js";
import { TestSets } from "./resources/test-sets.js";
import { Users } from "./resources/users.js";
import { Validation } from "./resources/validation.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The UiPath Orchestrator API provides programmatic access to the core automation management
 * platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and
 * more., The UiPath Automation Hub API provides access to the automation pipeline and idea
 * management platform, allowing developers to programmatically create, retrieve, and manage
 * automation ideas, projects, and pipeline data., The UiPath Orchestrator API provides programmatic
 * access to the core automation management platform, enabling developers to manage robots, jobs,
 * processes, queues, assets, schedules, and more., The UiPath Platform Management API covers
 * foundational platform administration resources including identity management, audit log access,
 * and licensing operations., The UiPath Automation Hub API provides access to the automation
 * pipeline and idea management platform, allowing developers to programmatically create, retrieve,
 * and manage automation ideas, projects, and pipeline data., The UiPath Document Understanding API
 * enables programmatic access to intelligent document processing capabilities including
 * digitization, classification, extraction, and validation of document content., The UiPath
 * Document Understanding API enables programmatic access to intelligent document processing
 * capabilities including digitization, classification, extraction, and validation of document
 * content., The UiPath Document Understanding API enables programmatic access to intelligent
 * document processing capabilities including digitization, classification, extraction, and
 * validation of document content., The UiPath Data Service API, also referred to as the Data Fabric
 * OpenAPI, enables external applications to interact with structured data entities stored in
 * UiPath's cloud data platform., The UiPath Document Understanding API enables programmatic access
 * to intelligent document processing capabilities including digitization, classification,
 * extraction, and validation of document content., The UiPath Orchestrator API provides
 * programmatic access to the core automation management platform, enabling developers to manage
 * robots, jobs, processes, queues, assets, schedules, and more., The UiPath Platform Management API
 * covers foundational platform administration resources including identity management, audit log
 * access, and licensing operations., The UiPath Orchestrator API provides programmatic access to
 * the core automation management platform, enabling developers to manage robots, jobs, processes,
 * queues, assets, schedules, and more., The UiPath Platform Management API covers foundational
 * platform administration resources including identity management, audit log access, and licensing
 * operations., The UiPath Orchestrator API provides programmatic access to the core automation
 * management platform, enabling developers to manage robots, jobs, processes, queues, assets,
 * schedules, and more., The UiPath Orchestrator API provides programmatic access to the core
 * automation management platform, enabling developers to manage robots, jobs, processes, queues,
 * assets, schedules, and more., The UiPath Automation Hub API provides access to the automation
 * pipeline and idea management platform, allowing developers to programmatically create, retrieve,
 * and manage automation ideas, projects, and pipeline data., The UiPath Orchestrator API provides
 * programmatic access to the core automation management platform, enabling developers to manage
 * robots, jobs, processes, queues, assets, schedules, and more., The UiPath Test Manager API allows
 * external tools and systems to integrate with UiPath's test management platform for managing test
 * projects, test cases, test sets, requirements, and execution results programmatically., The
 * UiPath Orchestrator API provides programmatic access to the core automation management platform,
 * enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The
 * UiPath Orchestrator API provides programmatic access to the core automation management platform,
 * enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The
 * UiPath Test Manager API allows external tools and systems to integrate with UiPath's test
 * management platform for managing test projects, test cases, test sets, requirements, and
 * execution results programmatically., The UiPath Orchestrator API provides programmatic access to
 * the core automation management platform, enabling developers to manage robots, jobs, processes,
 * queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to
 * the core automation management platform, enabling developers to manage robots, jobs, processes,
 * queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to
 * the core automation management platform, enabling developers to manage robots, jobs, processes,
 * queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to
 * the core automation management platform, enabling developers to manage robots, jobs, processes,
 * queues, assets, schedules, and more., The UiPath Test Manager API allows external tools and
 * systems to integrate with UiPath's test management platform for managing test projects, test
 * cases, test sets, requirements, and execution results programmatically., The UiPath Test Manager
 * API allows external tools and systems to integrate with UiPath's test management platform for
 * managing test projects, test cases, test sets, requirements, and execution results
 * programmatically., The UiPath Test Manager API allows external tools and systems to integrate
 * with UiPath's test management platform for managing test projects, test cases, test sets,
 * requirements, and execution results programmatically., Operations tagged Users across 3 of this
 * provider's published API definitions: uipath-automation-hub-openapi.yml,
 * uipath-orchestrator-openapi.yml, uipath-platform-management-openapi.yml. Each path carries the
 * servers of the definition it was published in., The UiPath Document Understanding API enables
 * programmatic access to intelligent document processing capabilities including digitization,
 * classification, extraction, and validation of document content., The UiPath Orchestrator API
 * provides programmatic access to the core automation management platform, enabling developers to
 * manage robots, jobs, processes, queues, assets, schedules, and more.
 */
export class UiPathClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #alerts?: Alerts;
  #appInventory?: AppInventory;
  #assets?: Assets;
  #auditLogs?: AuditLogs;
  #automations?: Automations;
  #classification?: Classification;
  #digitization?: Digitization;
  #discovery?: Discovery;
  #entities?: Entities;
  #extraction?: Extraction;
  #folders?: Folders;
  #groups?: Groups;
  #jobs?: Jobs;
  #licenses?: Licenses;
  #machines?: Machines;
  #packages?: Packages;
  #pipeline?: Pipeline;
  #processes?: Processes;
  #projects?: Projects;
  #queueItems?: QueueItems;
  #queues?: Queues;
  #requirements?: Requirements;
  #robots?: Robots;
  #roles?: Roles;
  #schedules?: Schedules;
  #storageBuckets?: StorageBuckets;
  #testCases?: TestCases;
  #testExecutions?: TestExecutions;
  #testSets?: TestSets;
  #users?: Users;
  #validation?: Validation;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "UI_PATH_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "UiPathClient/2024.10.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2024.10.0", schema: s.string() },
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
   * Retrieve and manage system and automation alerts
   */
  get alerts(): Alerts {
    return (this.#alerts ??= new Alerts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage the application inventory used in automation assessments
   */
  get appInventory(): AppInventory {
    return (this.#appInventory ??= new AppInventory(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage shared assets such as credentials, text values, integers, and boolean values
   */
  get assets(): Assets {
    return (this.#assets ??= new Assets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve and download organization and tenant audit event logs
   */
  get auditLogs(): AuditLogs {
    return (this.#auditLogs ??= new AuditLogs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage automation ideas and projects in the pipeline
   */
  get automations(): Automations {
    return (this.#automations ??= new Automations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Classify documents into predefined document types
   */
  get classification(): Classification {
    return (this.#classification ??= new Classification(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Convert documents into a digitized format for downstream processing
   */
  get digitization(): Digitization {
    return (this.#digitization ??= new Digitization(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Discover available projects, classifiers, and extractors
   */
  get discovery(): Discovery {
    return (this.#discovery ??= new Discovery(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Perform CRUD operations on custom data entity records
   */
  get entities(): Entities {
    return (this.#entities ??= new Entities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Extract structured data fields from documents
   */
  get extraction(): Extraction {
    return (this.#extraction ??= new Extraction(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage organizational folders for grouping automation resources
   */
  get folders(): Folders {
    return (this.#folders ??= new Folders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage user groups and group memberships
   */
  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage automation job execution, including starting, stopping, and querying job state
   */
  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage license allocations across user groups and services
   */
  get licenses(): Licenses {
    return (this.#licenses ??= new Licenses(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage machine templates and registered physical or virtual machines
   */
  get machines(): Machines {
    return (this.#machines ??= new Machines(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage automation package uploads and versions
   */
  get packages(): Packages {
    return (this.#packages ??= new Packages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve automation pipeline data and status views
   */
  get pipeline(): Pipeline {
    return (this.#pipeline ??= new Pipeline(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage automation processes (published packages deployed to folders)
   */
  get processes(): Processes {
    return (this.#processes ??= new Processes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage test projects within Test Manager
   */
  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage individual queue transaction items and their processing state
   */
  get queueItems(): QueueItems {
    return (this.#queueItems ??= new QueueItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage transaction queues for distributing work items to robots
   */
  get queues(): Queues {
    return (this.#queues ??= new Queues(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage requirements and their traceability links to test cases
   */
  get requirements(): Requirements {
    return (this.#requirements ??= new Requirements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage software robots registered with Orchestrator
   */
  get robots(): Robots {
    return (this.#robots ??= new Robots(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage roles and their associated permissions
   */
  get roles(): Roles {
    return (this.#roles ??= new Roles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage time-based and recurring triggers for automation processes
   */
  get schedules(): Schedules {
    return (this.#schedules ??= new Schedules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage cloud storage buckets for storing automation artifacts
   */
  get storageBuckets(): StorageBuckets {
    return (this.#storageBuckets ??= new StorageBuckets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage test cases and their definitions
   */
  get testCases(): TestCases {
    return (this.#testCases ??= new TestCases(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve test execution results and logs
   */
  get testExecutions(): TestExecutions {
    return (this.#testExecutions ??= new TestExecutions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage test sets that group test cases for execution
   */
  get testSets(): TestSets {
    return (this.#testSets ??= new TestSets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage users and their roles within Automation Hub
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Validate and correct digitization, classification, and extraction results
   */
  get validation(): Validation {
    return (this.#validation ??= new Validation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage webhook subscriptions for Orchestrator event notifications
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
