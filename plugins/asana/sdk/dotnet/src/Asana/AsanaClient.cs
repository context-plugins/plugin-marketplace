using System.Net.Http;
using Asana.Api;
using Asana.Core;
using Asana.Core.Configuration;
using Asana.Core.Logging;
using Asana.Core.Models;

namespace Asana;

/// <summary>
/// This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., The Asana Rule Triggers API allows developers to trigger rules via incoming web requests, enabling external applications to connect to Asana through rule-based automation., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml)., This is the interface for interacting with the Asana Platform. Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
/// </summary>
public sealed class AsanaClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AsanaClient(HttpClient httpClient, AsanaClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AsanaClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ASANA_LOG"),
            "AsanaClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
    /// </summary>
    public Attachments Attachments => field ??= new Attachments(_rawClient, _server, _auth);

    /// <summary>
    /// Asana's audit log is an immutable log of important events in your organization's Asana instance.
    /// <para>
    /// The audit log API allows you to monitor and act upon important security and compliance-related changes. Organizations might use this API endpoint to:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Set up proactive alerting with a Security Information and Event Management (SIEM) tool like Splunk</description></item>
    ///   <item><description>Conduct reactive investigations when a security incident takes place</description></item>
    ///   <item><description>Visualize key domain data in aggregate to identify security trends</description></item>
    /// </list>
    /// <para>
    /// Note that since the API provides insight into what is happening in an Asana instance, the data is read-only. That is, there are no "write" or "update" endpoints for audit log events.
    /// </para>
    /// <para>
    /// Only Service Accounts in Enterprise Domains can access audit log API endpoints. Authentication with a Service Account's personal access token is required.
    /// </para>
    /// <para>
    /// For a full list of supported events, see supported AuditLogEvents.
    /// </para>
    /// </summary>
    public AuditLogApi AuditLogApi => field ??= new AuditLogApi(_rawClient, _server, _auth);

    /// <summary>
    /// There are many cases where you want to accomplish a variety of work in the Asana API but want to minimize the number of HTTP requests you make. For example:
    /// <para>
    /// * Modern browsers limit the number of requests that a single web page can
    /// make at once.
    /// * Mobile apps will use more battery life to keep the cellular radio on
    /// when making a series of requests.
    /// * There is an overhead cost to developing software that can make multiple
    /// requests in parallel.
    /// * Some cloud platforms handle parallelism poorly, or disallow it
    /// entirely.
    /// </para>
    /// <para>
    /// To make development easier in these use cases, Asana provides a <b>batch API</b> that enables developers to perform multiple “actions” by making only a single HTTP request.
    /// </para>
    /// <para>
    /// #### Making a batch request
    /// </para>
    /// <para>
    /// To make a batch request, send a <c>POST</c> request to <c>/batch</c>. Like other <c>POST</c> endpoints, the body should contain a <c>data</c> envelope. Inside this envelope should be a single <c>actions</c> field, containing a list of “action” objects. Each action represents a standard request to an existing endpoint in the Asana API.
    /// </para>
    /// <para>
    /// <b>The maximum number of actions allowed in a single batch request is 10</b>. Making a batch request with no actions in it will result in a <c>400 Bad Request</c>.
    /// </para>
    /// <para>
    /// When the batch API receives the list of actions to execute, it will dispatch those actions to the already-implemented endpoints specified by the <c>relative_path</c> and <c>method</c> for each action. This happens in parallel, so all actions in the request will be processed simultaneously. There is no guarantee of the execution order for these actions, nor is there a way to use the output of one action as the input of another action (such as creating a task and then commenting on it).
    /// </para>
    /// <para>
    /// The response to the batch request will contain (within the <c>data</c> envelope) a list of result objects, one for each action. The results are guaranteed to be in the same order as the actions in the request (e.g., the first result in the response corresponds to the first action in the request)
    /// </para>
    /// <para>
    /// The batch API will always attempt to return a <c>200 Success</c> response with individual result objects for each individual action in the request. Only in certain cases (such as missing authorization or malformed JSON in the body) will the entire request fail with another status code. Even if every individual action in the request fails, the batch API will still return a <c>200 Success</c> response, and each result object in the response will contain the errors encountered with each action.
    /// </para>
    /// <para>
    /// #### Rate limiting
    /// </para>
    /// <para>
    /// The batch API fully respects all of our rate limiting. This means that a batch request counts against *both* the standard rate limiter and the concurrent request limiter as though you had made a separate HTTP request for every individual action. For example, a batch request with five actions counts as five separate requests in the standard rate limiter, and counts as five concurrent requests in the concurrent request limiter. The batch request itself incurs no cost.
    /// </para>
    /// <para>
    /// If any of the actions in a batch request would exceed any of the enforced limits, the *entire* request will fail with a <c>429 Too Many Requests</c> error. This is to prevent the unpredictability of which actions might succeed if not all of them could succeed.
    /// </para>
    /// <para>
    /// #### Restrictions
    /// </para>
    /// <para>
    /// Not every endpoint can be accessed through the batch API. Specifically, the following actions cannot be taken and will result in a <c>400 Bad Request</c> for that action:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Uploading attachments</description></item>
    ///   <item><description>Creating, getting, or deleting organization exports</description></item>
    ///   <item><description>Any SCIM operations</description></item>
    ///   <item><description>Nested calls to the batch API</description></item>
    /// </list>
    /// </summary>
    public BatchApi BatchApi => field ??= new BatchApi(_rawClient, _server, _auth);

    /// <summary>
    /// _Note: Custom fields are a premium feature. Integrations which work with custom fields need to handle an assortment of use cases for free and premium users in context of free and premium organizations. For a detailed examination of which data users will have access in different circumstances, review the section below on access control._
    /// <para>
    /// In the Asana application, tasks, projects, and portfolios can hold user-specified custom fields which provide extra information (e.g., a "priority" property with an associated value, or a number representing the time required to complete a task). This lets a user define the type of information that each item within a project or portfolio can contain in addition to the built-in fields that Asana provides. <c>display_value</c> is a read-only field that will always be a string. For apps that use custom fields, this is a great way to safely display/export the value of a custom field, regardless of its type. We suggest apps use this field in order to future-proof for changes to custom fields. #### Characteristics of custom fields
    /// </para>
    /// <list type="bullet">
    ///   <item><description>There is metadata that defines the custom field. This metadata can be shared across an entire workspace, or be specific to a project or portfolio. * Creating a custom field setting on a project or portfolio means each direct child will have the custom field. This is conceptually akin to adding columns in a database or a spreadsheet: every task (row) in the project (table) can contain information for that field, including "blank" values (i.e., <c>null</c> data). For portfolio custom fields, every project (row) in the portfolio (table) will contain information for the custom field. * Custom field settings only go one child deep. This means that a custom field setting on a portfolio will give each project the custom field, but not each task within those projects. * Tasks have custom field _values_ assigned to them. #### Types of custom fields</description></item>
    /// </list>
    /// <para>
    /// Integrations using custom fields need to be aware of the six basic types that a custom field can adopt. These types are:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>text</c> - an arbitrary, relatively short string of text</description></item>
    ///   <item><description><c>number</c> - a number with a defined level of precision</description></item>
    ///   <item><description><c>enum</c> - a selection of a single option from a defined list of options (i.e., mutually exclusive selections)</description></item>
    ///   <item><description><c>multi_enum</c> - a selection of one or more options from a defined list of options (i.e., mutually inclusive selections)</description></item>
    ///   <item><description><c>date</c> - a reference date with an optional time value</description></item>
    ///   <item><description><c>people</c> - a list of active contributors (i.e., where their relationship to the work is defined in the custom field title)</description></item>
    /// </list>
    /// <para>
    /// #### Example use case
    /// </para>
    /// <para>
    /// Consider an organization that has defined a custom field for "Priority". This field is of <c>enum</c> type and can have user-defined values of <c>Low</c>, <c>Medium</c>, or <c>High</c>. This is the field metadata, and it is visible within, and shared across, the entire organization. A project is then created in the organization, called "Bugs", and the "Priority" custom field is associated with that project. This will allow all tasks within the "Bugs" project to have an associated "Priority". A new task is created within "Bugs". This task, then, has a field named "Priority" which can take on the custom field value of one of <c>[null]</c>, <c>Low</c>, <c>Medium</c>, and <c>High</c>. #### Custom fields in the API
    /// </para>
    /// <para>
    /// These custom fields are accessible via the API through a number of endpoints at the top level (e.g. <c>/custom_fields</c> and <c>/custom_field_settings</c>) and through requests on workspaces, portfolios, projects, and tasks resources. The API also provides a way to fetch both the metadata and data which define each particular custom field, so that a client application may render proper UI to display or edit the values. Text fields are currently limited to 1024 characters. On tasks, their custom field value will have a <c>text_value</c> property to represent this field.
    /// </para>
    /// </summary>
    public CustomFields CustomFields => field ??= new CustomFields(_rawClient, _server, _auth);

    /// <summary>
    /// Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the <c>is_important</c> property determines some possible application-specific handling of that custom field.
    /// </summary>
    public CustomFieldSettings CustomFieldSettings => field ??= new CustomFieldSettings(_rawClient, _server, _auth);

    /// <summary>
    /// An event is an object representing a change to a resource that was observed by an event subscription. Event streams rely on the same infrastructure as webhooks, which ensures events are delivered within a minute (on average). This system is designed for at most once delivery, meaning in exceptional circumstances a small number of events may be missing from the stream. For this reason, if your use case requires strong guarantees about processing all changes on a resource and cannot tolerate any missing events, regardless of how rare that might be, we recommend building a fallback polling system that fetches the resource periodically as well. Note that while webhooks cannot be replayed once delivered, events are retrievable from the event stream for 24 hours after being processed.
    /// <para>
    /// In general, requesting events on a resource is faster and subject to higher rate limits than requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to events on a project would include when stories are added to tasks in the project, and even to subtasks).
    /// </para>
    /// <para>
    /// Establish an initial sync token by making a request with no sync token. The response will be a <c>412 Precondition Failed</c> error - the same as if the sync token had expired.
    /// </para>
    /// <para>
    /// Subsequent requests should always provide the sync token from the immediately preceding call.
    /// </para>
    /// <para>
    /// Sync tokens may not be valid if you attempt to go "backward" in the history by requesting previous tokens, though re-requesting the current sync token is generally safe, and will always return the same results.
    /// </para>
    /// <para>
    /// When you receive a <c>412 Precondition Failed</c> error, it means that the sync token is either invalid or expired. If you are attempting to keep a set of data in sync, this signals you may need to re-crawl the data.
    /// </para>
    /// <para>
    /// Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the service.
    /// </para>
    /// </summary>
    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    /// <summary>
    /// A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.
    /// </summary>
    public GoalRelationships GoalRelationships => field ??= new GoalRelationships(_rawClient, _server, _auth);

    /// <summary>
    /// A goal is an object in the goal-tracking system that helps your organization drive measurable results.
    /// </summary>
    public Goals Goals => field ??= new Goals(_rawClient, _server, _auth);

    /// <summary>
    /// Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.
    /// <para>
    /// Only the creator of the duplication process can access the duplication status of the new object.
    /// </para>
    /// <para>
    /// *Note*: With any work that is handled asynchronously (e.g., project instantation from a template, duplicating a task or project, etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job <c>status</c> has returned a <c>succeeded</c> value.
    /// </para>
    /// </summary>
    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    /// <summary>
    /// An <c>organization_export</c> object represents a request to export the complete data of an organization in JSON format.
    /// <para>
    /// To export an organization using this API:
    /// </para>
    /// <para>
    /// * Create an <c>organization_export</c>
    /// request
    /// and store the ID that is returned.
    /// * Request the <c>organization_export</c> every few minutes, until the
    /// <c>state</c> field contains ‘finished’.
    /// * Download the file located at the URL in the <c>download_url</c> field. * Exports can take a long time, from several minutes to a few hours
    /// for large organizations.
    /// </para>
    /// <para>
    /// *Note: These endpoints are only available to Service Accounts of an Enterprise organization.*
    /// </para>
    /// </summary>
    public OrganizationExports OrganizationExports => field ??= new OrganizationExports(_rawClient, _server, _auth);

    /// <summary>
    /// This object determines if a user is a member of a portfolio.
    /// </summary>
    public PortfolioMemberships PortfolioMemberships => field ??= new PortfolioMemberships(_rawClient, _server, _auth);

    /// <summary>
    /// A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent status update.
    /// Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
    /// </summary>
    public Portfolios Portfolios => field ??= new Portfolios(_rawClient, _server, _auth);

    /// <summary>
    /// A project template is an object that allows new projects to be created
    /// with a predefined setup, which may include tasks, sections, rules, etc.
    /// It simplifies the process of running a workflow that involves a similar
    /// set of work every time.
    /// <para>
    /// Project templates in organizations are shared with a single team. Currently, the
    /// team of a project template cannot be changed via the API.
    /// </para>
    /// </summary>
    public ProjectTemplates ProjectTemplates => field ??= new ProjectTemplates(_rawClient, _server, _auth);

    /// <summary>
    /// A project brief object represents a rich text document that describes a project.
    /// <para>
    /// Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see this post in the developer forum.
    /// </para>
    /// </summary>
    public ProjectBriefs ProjectBriefs => field ??= new ProjectBriefs(_rawClient, _server, _auth);

    /// <summary>
    /// With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
    /// </summary>
    public ProjectMemberships ProjectMemberships => field ??= new ProjectMemberships(_rawClient, _server, _auth);

    /// <summary>
    /// *Deprecated: new integrations should prefer using status updates*
    /// <para>
    /// A project status is an update on the progress of a particular project,
    /// and is sent out to all project followers when created. These updates
    /// include both text describing the update and a color code intended to
    /// represent the overall state of the project: "green" for projects that
    /// are on track, "yellow" for projects at risk, "red" for projects that
    /// are behind, and "blue" for projects on hold.
    /// </para>
    /// <para>
    /// Project statuses can be created and deleted, but not modified.
    /// </para>
    /// </summary>
    public ProjectStatuses ProjectStatuses => field ??= new ProjectStatuses(_rawClient, _server, _auth);

    /// <summary>
    /// A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
    /// <para>
    /// Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.
    /// </para>
    /// <para>
    /// Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.
    /// </para>
    /// <para>
    /// <b>Note:</b> You can use certain project endpoints to operate on user task lists (My Tasks) by substituting the <c>{project_gid}</c> with the <c>{user_task_list_gid}</c>. For example, you can perform operations on the custom fields of a user task list by using the following projects endpoints: Add a custom field to a project, Remove a custom field from a project and Get a project's custom fields
    /// </para>
    /// </summary>
    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    /// <summary>
    /// Trigger rules via incoming web requests.
    /// </summary>
    public Rules Rules => field ??= new Rules(_rawClient, _server, _auth);

    /// <summary>
    /// A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
    /// <para>
    /// Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.
    /// </para>
    /// <para>
    /// The ‘memberships’ property when getting a task will return the information for the section or the column under ‘section’ in the response.
    /// </para>
    /// </summary>
    public Sections Sections => field ??= new Sections(_rawClient, _server, _auth);

    /// <summary>
    /// A status update is an update on the progress of a particular object,
    /// and is sent out to all followers when created. These updates
    /// include both text describing the update and a <c>status_type</c> intended to
    /// represent the overall state of the project. These include: <c>on_track</c> for projects that
    /// are on track, <c>at_risk</c> for projects at risk, <c>off_track</c> for projects that
    /// are behind, and <c>on_hold</c> for projects on hold.
    /// <para>
    /// Status updates can be created and deleted, but not modified.
    /// </para>
    /// </summary>
    public StatusUpdates StatusUpdates => field ??= new StatusUpdates(_rawClient, _server, _auth);

    /// <summary>
    /// *See our forum post for more info on when conditional fields are returned.*
    /// <para>
    /// A story represents an activity associated with an object in the Asana system. Stories are generated by the system whenever users take actions such as creating or assigning tasks, or moving tasks between projects. "Comments" are also a form of user-generated story.
    /// </para>
    /// </summary>
    public Stories Stories => field ??= new Stories(_rawClient, _server, _auth);

    /// <summary>
    /// A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
    /// <para>
    /// Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.
    /// </para>
    /// </summary>
    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    /// <summary>
    /// The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.
    /// <para>
    /// Sections are unique in that they will be included in the <c>memberships</c> field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.
    /// </para>
    /// <para>
    /// Queries return a compact representation of each task object. To retrieve *all* fields or *specific set* of the fields, use field selectors to manipulate what data is included in a response.
    /// </para>
    /// </summary>
    public Tasks Tasks => field ??= new Tasks(_rawClient, _server, _auth);

    /// <summary>
    /// This object determines if a user is a member of a team.
    /// </summary>
    public TeamMemberships TeamMemberships => field ??= new TeamMemberships(_rawClient, _server, _auth);

    /// <summary>
    /// A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
    /// </summary>
    public Teams Teams => field ??= new Teams(_rawClient, _server, _auth);

    /// <summary>
    /// A time period is an object that represents a domain-scoped date range that can be set on goals.
    /// </summary>
    public TimePeriods TimePeriods => field ??= new TimePeriods(_rawClient, _server, _auth);

    /// <summary>
    /// The typeahead search API provides search for objects from a single workspace.
    /// </summary>
    public Typeahead Typeahead => field ??= new Typeahead(_rawClient, _server, _auth);

    /// <summary>
    /// A user task list represents the tasks assigned to a particular user. This list is the user's My Tasks list.
    /// </summary>
    public UserTaskLists UserTaskLists => field ??= new UserTaskLists(_rawClient, _server, _auth);

    /// <summary>
    /// A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
    /// <para>
    /// Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier <c>me</c> can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, <c>GET /users/me</c>).
    /// </para>
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).
    /// <para>
    /// For a more detailed explanation of webhooks see the overview of webhooks.
    /// </para>
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);

    /// <summary>
    /// This object determines if a user is a member of a workspace.
    /// </summary>
    public WorkspaceMemberships WorkspaceMemberships => field ??= new WorkspaceMemberships(_rawClient, _server, _auth);

    /// <summary>
    /// A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
    /// <para>
    /// An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its <c>is_organization</c> property.
    /// </para>
    /// <para>
    /// Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any <c>workspace</c> parameter.
    /// </para>
    /// </summary>
    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server, _auth);
}
