import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Attachments } from "./resources/attachments.js";
import { AuditLogApi } from "./resources/audit-log-api.js";
import { BatchApi } from "./resources/batch-api.js";
import { CustomFieldSettings } from "./resources/custom-field-settings.js";
import { CustomFields } from "./resources/custom-fields.js";
import { Events } from "./resources/events.js";
import { GoalRelationships } from "./resources/goal-relationships.js";
import { Goals } from "./resources/goals.js";
import { Jobs } from "./resources/jobs.js";
import { OrganizationExports } from "./resources/organization-exports.js";
import { PortfolioMemberships } from "./resources/portfolio-memberships.js";
import { Portfolios } from "./resources/portfolios.js";
import { ProjectBriefs } from "./resources/project-briefs.js";
import { ProjectMemberships } from "./resources/project-memberships.js";
import { ProjectStatuses } from "./resources/project-statuses.js";
import { ProjectTemplates } from "./resources/project-templates.js";
import { Projects } from "./resources/projects.js";
import { Rules } from "./resources/rules.js";
import { Sections } from "./resources/sections.js";
import { StatusUpdates } from "./resources/status-updates.js";
import { Stories } from "./resources/stories.js";
import { Tags } from "./resources/tags.js";
import { Tasks } from "./resources/tasks.js";
import { TeamMemberships } from "./resources/team-memberships.js";
import { Teams } from "./resources/teams.js";
import { TimePeriods } from "./resources/time-periods.js";
import { Typeahead } from "./resources/typeahead.js";
import { UserTaskLists } from "./resources/user-task-lists.js";
import { Users } from "./resources/users.js";
import { Webhooks } from "./resources/webhooks.js";
import { WorkspaceMemberships } from "./resources/workspace-memberships.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This is the interface for interacting with the Asana Platform. Our API reference is generated
 * from our [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., The Asana
 * Rule Triggers API allows developers to trigger rules via incoming web requests, enabling external
 * applications to connect to Asana through rule-based automation., This is the interface for
 * interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the
 * interface for interacting with the Asana Platform. Our API reference is generated from our
 * [OpenAPI spec]
 * (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 */
export class AsanaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #attachments?: Attachments;
  #auditLogApi?: AuditLogApi;
  #batchApi?: BatchApi;
  #customFieldSettings?: CustomFieldSettings;
  #customFields?: CustomFields;
  #events?: Events;
  #goalRelationships?: GoalRelationships;
  #goals?: Goals;
  #jobs?: Jobs;
  #organizationExports?: OrganizationExports;
  #portfolioMemberships?: PortfolioMemberships;
  #portfolios?: Portfolios;
  #projectBriefs?: ProjectBriefs;
  #projectMemberships?: ProjectMemberships;
  #projectStatuses?: ProjectStatuses;
  #projectTemplates?: ProjectTemplates;
  #projects?: Projects;
  #rules?: Rules;
  #sections?: Sections;
  #statusUpdates?: StatusUpdates;
  #stories?: Stories;
  #tags?: Tags;
  #tasks?: Tasks;
  #teamMemberships?: TeamMemberships;
  #teams?: Teams;
  #timePeriods?: TimePeriods;
  #typeahead?: Typeahead;
  #userTaskLists?: UserTaskLists;
  #users?: Users;
  #webhooks?: Webhooks;
  #workspaceMemberships?: WorkspaceMemberships;
  #workspaces?: Workspaces;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ASANA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AsanaClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * An *attachment* object represents any file attached to a task in Asana, whether it’s an
   * uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
   */
  get attachments(): Attachments {
    return (this.#attachments ??= new Attachments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Asana's audit log is an immutable log of important events in your organization's Asana
   * instance.
   *
   * The audit log API allows you to monitor and act upon important security and compliance-related
   * changes. Organizations might use this API endpoint to:
   *
   * * Set up proactive alerting with a Security Information and Event Management (SIEM) tool like
   *   Splunk
   * * Conduct reactive investigations when a security incident takes place
   * * Visualize key domain data in aggregate to identify security trends
   *
   * Note that since the API provides insight into what is happening in an Asana instance, the data
   * is read-only. That is, there are no "write" or "update" endpoints for audit log events.
   *
   * Only Service Accounts in Enterprise Domains can access audit log API endpoints. Authentication
   * with a Service Account's personal access token is required.
   *
   * For a full list of supported events, see supported AuditLogEvents.
   */
  get auditLogApi(): AuditLogApi {
    return (this.#auditLogApi ??= new AuditLogApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * There are many cases where you want to accomplish a variety of work in the Asana API but want
   * to minimize the number of HTTP requests you make. For example:
   *
   * * Modern browsers limit the number of requests that a single web page can make at once.
   * * Mobile apps will use more battery life to keep the cellular radio on when making a series of
   *   requests.
   * * There is an overhead cost to developing software that can make multiple requests in parallel.
   * * Some cloud platforms handle parallelism poorly, or disallow it entirely.
   *
   * To make development easier in these use cases, Asana provides a **batch API** that enables
   * developers to perform multiple “actions” by making only a single HTTP request.
   *
   * #### Making a batch request
   *
   * To make a batch request, send a `POST` request to `/batch`. Like other `POST` endpoints, the
   * body should contain a `data` envelope. Inside this envelope should be a single `actions` field,
   * containing a list of “action” objects. Each action represents a standard request to an existing
   * endpoint in the Asana API.
   *
   * **The maximum number of actions allowed in a single batch request is 10**. Making a batch
   * request with no actions in it will result in a `400 Bad Request`.
   *
   * When the batch API receives the list of actions to execute, it will dispatch those actions to
   * the already-implemented endpoints specified by the `relative_path` and `method` for each
   * action. This happens in parallel, so all actions in the request will be processed
   * simultaneously. There is no guarantee of the execution order for these actions, nor is there a
   * way to use the output of one action as the input of another action (such as creating a task and
   * then commenting on it).
   *
   * The response to the batch request will contain (within the `data` envelope) a list of result
   * objects, one for each action. The results are guaranteed to be in the same order as the actions
   * in the request (e.g., the first result in the response corresponds to the first action in the
   * request)
   *
   * The batch API will always attempt to return a `200 Success` response with individual result
   * objects for each individual action in the request. Only in certain cases (such as missing
   * authorization or malformed JSON in the body) will the entire request fail with another status
   * code. Even if every individual action in the request fails, the batch API will still return a
   * `200 Success` response, and each result object in the response will contain the errors
   * encountered with each action.
   *
   * #### Rate limiting
   *
   * The batch API fully respects all of our rate limiting. This means that a batch request counts
   * against *both* the standard rate limiter and the concurrent request limiter as though you had
   * made a separate HTTP request for every individual action. For example, a batch request with
   * five actions counts as five separate requests in the standard rate limiter, and counts as five
   * concurrent requests in the concurrent request limiter. The batch request itself incurs no cost.
   *
   * If any of the actions in a batch request would exceed any of the enforced limits, the *entire*
   * request will fail with a `429 Too Many Requests` error. This is to prevent the unpredictability
   * of which actions might succeed if not all of them could succeed.
   *
   * #### Restrictions
   *
   * Not every endpoint can be accessed through the batch API. Specifically, the following actions
   * cannot be taken and will result in a `400 Bad Request` for that action:
   *
   * * Uploading attachments
   * * Creating, getting, or deleting organization exports
   * * Any SCIM operations
   * * Nested calls to the batch API
   */
  get batchApi(): BatchApi {
    return (this.#batchApi ??= new BatchApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Custom fields are attached to a particular project with the custom field settings resource.
   * This resource both represents the many-to-many join of the custom field and project as well as
   * stores information that is relevant to that particular pairing. For instance, the
   * `is_important` property determines some possible application-specific handling of that custom
   * field.
   */
  get customFieldSettings(): CustomFieldSettings {
    return (this.#customFieldSettings ??= new CustomFieldSettings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * _Note: Custom fields are a premium feature. Integrations which work with custom fields need to
   * handle an assortment of use cases for free and premium users in context of free and premium
   * organizations. For a detailed examination of which data users will have access in different
   * circumstances, review the section below on access control._
   *
   * In the Asana application, tasks, projects, and portfolios can hold user-specified custom fields
   * which provide extra information (e.g., a "priority" property with an associated value, or a
   * number representing the time required to complete a task). This lets a user define the type of
   * information that each item within a project or portfolio can contain in addition to the
   * built-in fields that Asana provides. `display_value` is a read-only field that will always be a
   * string. For apps that use custom fields, this is a great way to safely display/export the value
   * of a custom field, regardless of its type. We suggest apps use this field in order to
   * future-proof for changes to custom fields. #### Characteristics of custom fields
   *
   * * There is metadata that defines the custom field. This metadata can be shared across an entire
   *   workspace, or be specific to a project or portfolio. * Creating a custom field setting on a
   *   project or portfolio means each direct child will have the custom field. This is conceptually
   *   akin to adding columns in a database or a spreadsheet: every task (row) in the project
   *   (table) can contain information for that field, including "blank" values (i.e., `null` data).
   *   For portfolio custom fields, every project (row) in the portfolio (table) will contain
   *   information for the custom field. * Custom field settings only go one child deep. This means
   *   that a custom field setting on a portfolio will give each project the custom field, but not
   *   each task within those projects. * Tasks have custom field _values_ assigned to them. ####
   *   Types of custom fields
   *
   * Integrations using custom fields need to be aware of the six basic types that a custom field
   * can adopt. These types are:
   *
   * * `text` - an arbitrary, relatively short string of text
   * * `number` - a number with a defined level of precision
   * * `enum` - a selection of a single option from a defined list of options (i.e., mutually
   *   exclusive selections)
   * * `multi_enum` - a selection of one or more options from a defined list of options (i.e.,
   *   mutually inclusive selections)
   * * `date` - a reference date with an optional time value
   * * `people` - a list of active contributors (i.e., where their relationship to the work is
   *   defined in the custom field title)
   *
   * #### Example use case
   *
   * Consider an organization that has defined a custom field for "Priority". This field is of
   * `enum` type and can have user-defined values of `Low`, `Medium`, or `High`. This is the field
   * metadata, and it is visible within, and shared across, the entire organization. A project is
   * then created in the organization, called "Bugs", and the "Priority" custom field is associated
   * with that project. This will allow all tasks within the "Bugs" project to have an associated
   * "Priority". A new task is created within "Bugs". This task, then, has a field named "Priority"
   * which can take on the custom field value of one of `[null]`, `Low`, `Medium`, and `High`. ####
   * Custom fields in the API
   *
   * These custom fields are accessible via the API through a number of endpoints at the top level
   * (e.g. `/custom_fields` and `/custom_field_settings`) and through requests on workspaces,
   * portfolios, projects, and tasks resources. The API also provides a way to fetch both the
   * metadata and data which define each particular custom field, so that a client application may
   * render proper UI to display or edit the values. Text fields are currently limited to 1024
   * characters. On tasks, their custom field value will have a `text_value` property to represent
   * this field.
   */
  get customFields(): CustomFields {
    return (this.#customFields ??= new CustomFields(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An event is an object representing a change to a resource that was observed by an event
   * subscription. Event streams rely on the same infrastructure as webhooks, which ensures events
   * are delivered within a minute (on average). This system is designed for at most once delivery,
   * meaning in exceptional circumstances a small number of events may be missing from the stream.
   * For this reason, if your use case requires strong guarantees about processing all changes on a
   * resource and cannot tolerate any missing events, regardless of how rare that might be, we
   * recommend building a fallback polling system that fetches the resource periodically as well.
   * Note that while webhooks cannot be replayed once delivered, events are retrievable from the
   * event stream for 24 hours after being processed.
   *
   * In general, requesting events on a resource is faster and subject to higher rate limits than
   * requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to
   * events on a project would include when stories are added to tasks in the project, and even to
   * subtasks).
   *
   * Establish an initial sync token by making a request with no sync token. The response will be a
   * `412 Precondition Failed` error - the same as if the sync token had expired.
   *
   * Subsequent requests should always provide the sync token from the immediately preceding call.
   *
   * Sync tokens may not be valid if you attempt to go "backward" in the history by requesting
   * previous tokens, though re-requesting the current sync token is generally safe, and will always
   * return the same results.
   *
   * When you receive a `412 Precondition Failed` error, it means that the sync token is either
   * invalid or expired. If you are attempting to keep a set of data in sync, this signals you may
   * need to re-crawl the data.
   *
   * Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the
   * service.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A goal relationship is an object representing the relationship between a goal and another goal,
   * a project, or a portfolio.
   */
  get goalRelationships(): GoalRelationships {
    return (this.#goalRelationships ??= new GoalRelationships(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A goal is an object in the goal-tracking system that helps your organization drive measurable
   * results.
   */
  get goals(): Goals {
    return (this.#goals ??= new Goals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Jobs represent processes that handle asynchronous work. A job created when an endpoint requests
   * an action that will be handled asynchronously, such as project or task duplication.
   *
   * Only the creator of the duplication process can access the duplication status of the new
   * object.
   *
   * *Note*: With any work that is handled asynchronously (e.g., project instantation from a
   * template, duplicating a task or project, etc.), the *intermittent states* of newly-created
   * objects may not be consistent. That is, object properties may return different values each time
   * when polled until the job `status` has returned a `succeeded` value.
   */
  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An `organization_export` object represents a request to export the complete data of an
   * organization in JSON format.
   *
   * To export an organization using this API:
   *
   * * Create an `organization_export` request and store the ID that is returned.
   * * Request the `organization_export` every few minutes, until the `state` field contains
   *   ‘finished’.
   * * Download the file located at the URL in the `download_url` field. * Exports can take a long
   *   time, from several minutes to a few hours for large organizations.
   *
   * *Note: These endpoints are only available to Service Accounts of an Enterprise organization.*
   */
  get organizationExports(): OrganizationExports {
    return (this.#organizationExports ??= new OrganizationExports(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This object determines if a user is a member of a portfolio.
   */
  get portfolioMemberships(): PortfolioMemberships {
    return (this.#portfolioMemberships ??= new PortfolioMemberships(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * A portfolio gives a high-level overview of the status of multiple initiatives in Asana.
   * Portfolios provide a dashboard overview of the state of multiple projects, including a progress
   * report and the most recent status update. Portfolios have some restrictions on size. Each
   * portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
   */
  get portfolios(): Portfolios {
    return (this.#portfolios ??= new Portfolios(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A project brief object represents a rich text document that describes a project.
   *
   * Please note that this API is in *preview*, and is expected to change. This API is to be used
   * for development and testing only as an advance view into the upcoming rich text format
   * experience in the task description. For more information, see this post in the developer forum.
   */
  get projectBriefs(): ProjectBriefs {
    return (this.#projectBriefs ??= new ProjectBriefs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * With the introduction of “comment-only” projects in Asana, a user’s membership in a project
   * comes with associated permissions. These permissions (i.e., whether a user has full access to
   * the project or comment-only access) are accessible through the project memberships endpoints
   * described here.
   */
  get projectMemberships(): ProjectMemberships {
    return (this.#projectMemberships ??= new ProjectMemberships(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * *Deprecated: new integrations should prefer using status updates*
   *
   * A project status is an update on the progress of a particular project, and is sent out to all
   * project followers when created. These updates include both text describing the update and a
   * color code intended to represent the overall state of the project: "green" for projects that
   * are on track, "yellow" for projects at risk, "red" for projects that are behind, and "blue" for
   * projects on hold.
   *
   * Project statuses can be created and deleted, but not modified.
   */
  get projectStatuses(): ProjectStatuses {
    return (this.#projectStatuses ??= new ProjectStatuses(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A project template is an object that allows new projects to be created with a predefined setup,
   * which may include tasks, sections, rules, etc. It simplifies the process of running a workflow
   * that involves a similar set of work every time.
   *
   * Project templates in organizations are shared with a single team. Currently, the team of a
   * project template cannot be changed via the API.
   */
  get projectTemplates(): ProjectTemplates {
    return (this.#projectTemplates ??= new ProjectTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A project represents a prioritized list of tasks in Asana or a board with columns of tasks
   * represented as cards. A project exists in a single workspace or organization and is accessible
   * to a subset of users in that workspace or organization, depending on its permissions.
   *
   * Projects in organizations are shared with a single team. Currently, the team of a project
   * cannot be changed via the API. Non-organization workspaces do not have teams and so you should
   * not specify the team of project in a regular workspace.
   *
   * Followers of a project are a subset of the members of that project. Followers of a project will
   * receive all updates including tasks created, added and removed from that project. Members of
   * the project have access to and will receive status updates of the project. Adding followers to
   * a project will add them as members if they are not already, removing followers from a project
   * will not affect membership.
   *
   * **Note:** You can use certain project endpoints to operate on user task lists (My Tasks) by
   * substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform
   * operations on the custom fields of a user task list by using the following projects endpoints:
   * Add a custom field to a project, Remove a custom field from a project and Get a project's
   * custom fields
   */
  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Trigger rules via incoming web requests.
   */
  get rules(): Rules {
    return (this.#rules ??= new Rules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A section is a subdivision of a project that groups tasks together. It can either be a header
   * above a list of tasks in a list view or a column in a board view of a project.
   *
   * Sections are largely a shared idiom in Asana’s API for both list and board views of a project
   * regardless of the project’s layout.
   *
   * The ‘memberships’ property when getting a task will return the information for the section or
   * the column under ‘section’ in the response.
   */
  get sections(): Sections {
    return (this.#sections ??= new Sections(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A status update is an update on the progress of a particular object, and is sent out to all
   * followers when created. These updates include both text describing the update and a
   * `status_type` intended to represent the overall state of the project. These include: `on_track`
   * for projects that are on track, `at_risk` for projects at risk, `off_track` for projects that
   * are behind, and `on_hold` for projects on hold.
   *
   * Status updates can be created and deleted, but not modified.
   */
  get statusUpdates(): StatusUpdates {
    return (this.#statusUpdates ??= new StatusUpdates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * *See our forum post for more info on when conditional fields are returned.*
   *
   * A story represents an activity associated with an object in the Asana system. Stories are
   * generated by the system whenever users take actions such as creating or assigning tasks, or
   * moving tasks between projects. "Comments" are also a form of user-generated story.
   */
  get stories(): Stories {
    return (this.#stories ??= new Stories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A tag is a label that can be attached to any task in Asana. It exists in a single workspace or
   * organization.
   *
   * Tags have some metadata associated with them, but it is possible that we will simplify them in
   * the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not
   * provide any ordering on the tasks they are associated with.
   */
  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The task is the basic object around which many operations in Asana are centered. In the Asana
   * application, multiple tasks populate the middle pane according to some view parameters, and the
   * set of selected tasks determines the more detailed information presented in the details pane.
   *
   * Sections are unique in that they will be included in the `memberships` field of task objects
   * returned in the API when the task is within a section. They can also be used to manipulate the
   * ordering of a task within a project.
   *
   * Queries return a compact representation of each task object. To retrieve *all* fields or
   * *specific set* of the fields, use field selectors to manipulate what data is included in a
   * response.
   */
  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This object determines if a user is a member of a team.
   */
  get teamMemberships(): TeamMemberships {
    return (this.#teamMemberships ??= new TeamMemberships(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A team is used to group related projects and people together within an organization. Each
   * project in an organization is associated with a team.
   */
  get teams(): Teams {
    return (this.#teams ??= new Teams(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A time period is an object that represents a domain-scoped date range that can be set on goals.
   */
  get timePeriods(): TimePeriods {
    return (this.#timePeriods ??= new TimePeriods(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The typeahead search API provides search for objects from a single workspace.
   */
  get typeahead(): Typeahead {
    return (this.#typeahead ??= new Typeahead(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A user task list represents the tasks assigned to a particular user. This list is the user's My
   * Tasks list.
   */
  get userTaskLists(): UserTaskLists {
    return (this.#userTaskLists ??= new UserTaskLists(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A user object represents an account in Asana that can be given access to various workspaces,
   * projects, and tasks.
   *
   * Like other objects in the system, users are referred to by numerical IDs. However, the special
   * string identifier `me` can be used anywhere a user ID is accepted, to refer to the current
   * authenticated user (e.g, `GET /users/me`).
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Webhooks allow you to subscribe to notifications about events that occur on Asana resources
   * (e.g., tasks, projects, stories, etc.).
   *
   * For a more detailed explanation of webhooks see the overview of webhooks.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This object determines if a user is a member of a workspace.
   */
  get workspaceMemberships(): WorkspaceMemberships {
    return (this.#workspaceMemberships ??= new WorkspaceMemberships(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an
   * associated workspace.
   *
   * An *organization* is a special kind of workspace that represents a company. In an organization,
   * you can group your projects into teams. You can read more about how organizations work on the
   * Asana Guide. To tell if your workspace is an organization or not, check its `is_organization`
   * property.
   *
   * Over time, we intend to migrate most workspaces into organizations and to release more
   * organization-specific functionality. We may eventually deprecate using workspace-based APIs for
   * organizations. Currently, and until after some reasonable grace period following any further
   * announcements, you can still reference organizations in any `workspace` parameter.
   */
  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }
}
