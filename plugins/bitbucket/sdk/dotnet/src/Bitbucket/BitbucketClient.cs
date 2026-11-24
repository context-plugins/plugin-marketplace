using System.Net.Http;
using Bitbucket.Api;
using Bitbucket.Core;
using Bitbucket.Core.Configuration;
using Bitbucket.Core.Logging;
using Bitbucket.Core.Models;

namespace Bitbucket;

/// <summary>
/// Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
/// </summary>
public sealed class BitbucketClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BitbucketClient(HttpClient httpClient, BitbucketClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BitbucketClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BITBUCKET_LOG"),
            "BitbucketClient",
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
    /// The addon resource is intended to use used by Bitbucket Cloud Connect
    /// Apps, and only supports JWT authentication.
    /// </summary>
    public Addon Addon => field ??= new Addon(_rawClient, _server, _auth);

    /// <summary>
    /// Repository owners and administrators can set branch management
    /// rules on a repository that control what can be pushed by whom.
    /// Through these rules, you can enforce a project or team
    /// workflow. For example, owners or administrators can:
    /// <list type="bullet">
    ///   <item><description>Limit push powers</description></item>
    ///   <item><description>Prevent branch deletion</description></item>
    ///   <item><description>Prevent history re-writes (Git only)</description></item>
    /// </list>
    /// </summary>
    public BranchRestrictions BranchRestrictions => field ??= new BranchRestrictions(_rawClient, _server, _auth);

    /// <summary>
    /// The branching model resource is used to modify the branching model
    /// for a repository.
    /// <para>
    /// You can use the branching model to define a branch based workflow
    /// for your repositories. When you map your workflow to branch types,
    /// you can ensure that branches are named consistently by configuring
    /// which branch types to make available.
    /// </para>
    /// </summary>
    public BranchingModelApi BranchingModelApi => field ??= new BranchingModelApi(_rawClient, _server, _auth);

    /// <summary>
    /// Commit statuses provide a way to tag commits with meta data,
    /// like automated build results.
    /// </summary>
    public CommitStatuses CommitStatuses => field ??= new CommitStatuses(_rawClient, _server, _auth);

    /// <summary>
    /// These are the repository's commits. They are paginated and returned in
    /// reverse chronological order, similar to the output of git log.
    /// </summary>
    public Commits Commits => field ??= new Commits(_rawClient, _server, _auth);

    /// <summary>
    /// Teams are deploying code faster than ever, thanks to continuous
    /// delivery practices and tools like Bitbucket Pipelines. Bitbucket
    /// Deployments gives teams visibility into their deployment
    /// environments and helps teams to track how far changes have
    /// progressed in their deployment pipeline.
    /// </summary>
    public Deployments Deployments => field ??= new Deployments(_rawClient, _server, _auth);

    /// <summary>
    /// Access the list of download links associated with the repository.
    /// </summary>
    public Downloads Downloads => field ??= new Downloads(_rawClient, _server, _auth);

    /// <summary>
    /// The GPG resource allows you to manage GPG keys.
    /// </summary>
    public Gpg Gpg => field ??= new Gpg(_rawClient, _server, _auth);

    /// <summary>
    /// The issue resources provide functionality for getting information on
    /// issues in an issue tracker, creating new issues, updating them and deleting
    /// them.
    /// </summary>
    public IssueTracker IssueTracker => field ??= new IssueTracker(_rawClient, _server, _auth);

    /// <summary>
    /// Bitbucket Pipelines brings continuous delivery to Bitbucket
    /// Cloud, empowering teams with full branching to deployment
    /// visibility and faster feedback loops.
    /// </summary>
    public Pipelines Pipelines => field ??= new Pipelines(_rawClient, _server, _auth);

    /// <summary>
    /// Bitbucket Cloud projects make it easier for teams to focus on
    /// a goal, product, or process by organizing their repositories.
    /// </summary>
    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public Properties Properties => field ??= new Properties(_rawClient, _server, _auth);

    /// <summary>
    /// Pull requests are a feature that makes it easier for developers
    /// to collaborate using Bitbucket. They provide a user-friendly web
    /// interface for discussing proposed changes before integrating them
    /// into the official project.
    /// </summary>
    public PullRequests PullRequests => field ??= new PullRequests(_rawClient, _server, _auth);

    /// <summary>
    /// The refs resource allows you access branches and tags in a repository.
    /// By default, results will be in the order the underlying source control
    /// system returns them and identical to the ordering one sees when running
    /// "$ git show-ref". Note that this follows simple lexical ordering of the
    /// ref names.
    /// </summary>
    public Refs Refs => field ??= new Refs(_rawClient, _server, _auth);

    /// <summary>
    /// Code insights provides reports, annotations, and metrics to help you
    /// and your team improve code quality in pull requests throughout the code
    /// review process. Some of the available code insights are static analysis
    /// reports, security scan results, artifact links, unit tests, and build
    /// status.
    /// </summary>
    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    /// <summary>
    /// A Git repository is a virtual storage of your project. It
    /// allows you to save versions of your code, which you can access
    /// when needed. The repo resource allows you to access public repos,
    /// or repos that belong to a specific workspace.
    /// </summary>
    public Repositories Repositories => field ??= new Repositories(_rawClient, _server, _auth);

    /// <summary>
    /// The SSH resource allows you to manage SSH keys.
    /// </summary>
    public Ssh Ssh => field ??= new Ssh(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    /// <summary>
    /// Snippets allow you share code segments or files with yourself, members of
    /// your workspace, or the world.
    /// <para>
    /// Like pull requests, repositories and workspaces, the full set of snippets
    /// is defined by what the current user has access to. This includes all
    /// snippets owned by any of the workspaces the user is a member of, or
    /// snippets by other users that the current user is either watching or has
    /// collaborated on (for instance by commenting on it).
    /// </para>
    /// </summary>
    public Snippets Snippets => field ??= new Snippets(_rawClient, _server, _auth);

    /// <summary>
    /// Browse the source code in the repository and
    /// create new commits by uploading.
    /// </summary>
    public Source Source => field ??= new Source(_rawClient, _server, _auth);

    /// <summary>
    /// The users resource allows you to access public information
    /// associated with a user account. Most resources in the users
    /// endpoint have been deprecated in favor of workspaces.
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Webhooks provide a way to configure Bitbucket Cloud to make requests to
    /// your server (or another external service) whenever certain events occur in
    /// Bitbucket Cloud.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);

    /// <summary>
    /// A workspace is where you create repositories, collaborate on
    /// your code, and organize different streams of work in your Bitbucket
    /// Cloud account. Workspaces replace the use of teams and users in API
    /// calls.
    /// </summary>
    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server, _auth);
}
