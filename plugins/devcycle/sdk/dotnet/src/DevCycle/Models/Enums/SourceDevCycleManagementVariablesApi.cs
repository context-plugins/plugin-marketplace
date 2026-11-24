using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The system that was used for the creation of the Variable.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceDevCycleManagementVariablesApi>))]
public sealed record SourceDevCycleManagementVariablesApi : OpenStringEnum<SourceDevCycleManagementVariablesApi>
{
    private SourceDevCycleManagementVariablesApi(string value) : base(value)
    {
    }

    public static readonly SourceDevCycleManagementVariablesApi Api = new("api");

    public static readonly SourceDevCycleManagementVariablesApi Dashboard = new("dashboard");

    public static readonly SourceDevCycleManagementVariablesApi Importer = new("importer");

    public static readonly SourceDevCycleManagementVariablesApi GithubCodeUsages = new("github.code_usages");

    public static readonly SourceDevCycleManagementVariablesApi GithubPrInsights = new("github.pr_insights");

    public static readonly SourceDevCycleManagementVariablesApi GitlabCodeUsages = new("gitlab.code_usages");

    public static readonly SourceDevCycleManagementVariablesApi GitlabPrInsights = new("gitlab.pr_insights");

    public static readonly SourceDevCycleManagementVariablesApi BitbucketCodeUsages = new("bitbucket.code_usages");

    public static readonly SourceDevCycleManagementVariablesApi BitbucketPrInsights = new("bitbucket.pr_insights");

    public static readonly SourceDevCycleManagementVariablesApi Terraform = new("terraform");

    public static readonly SourceDevCycleManagementVariablesApi Cli = new("cli");

    public static readonly SourceDevCycleManagementVariablesApi Slack = new("slack");

    public static readonly SourceDevCycleManagementVariablesApi Mcp = new("mcp");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onDashboard,
        Func<TResult> onImporter,
        Func<TResult> onGithubCodeUsages,
        Func<TResult> onGithubPrInsights,
        Func<TResult> onGitlabCodeUsages,
        Func<TResult> onGitlabPrInsights,
        Func<TResult> onBitbucketCodeUsages,
        Func<TResult> onBitbucketPrInsights,
        Func<TResult> onTerraform,
        Func<TResult> onCli,
        Func<TResult> onSlack,
        Func<TResult> onMcp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Dashboard => onDashboard(),
            _ when this == Importer => onImporter(),
            _ when this == GithubCodeUsages => onGithubCodeUsages(),
            _ when this == GithubPrInsights => onGithubPrInsights(),
            _ when this == GitlabCodeUsages => onGitlabCodeUsages(),
            _ when this == GitlabPrInsights => onGitlabPrInsights(),
            _ when this == BitbucketCodeUsages => onBitbucketCodeUsages(),
            _ when this == BitbucketPrInsights => onBitbucketPrInsights(),
            _ when this == Terraform => onTerraform(),
            _ when this == Cli => onCli(),
            _ when this == Slack => onSlack(),
            _ when this == Mcp => onMcp(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi,
        Action onDashboard,
        Action onImporter,
        Action onGithubCodeUsages,
        Action onGithubPrInsights,
        Action onGitlabCodeUsages,
        Action onGitlabPrInsights,
        Action onBitbucketCodeUsages,
        Action onBitbucketPrInsights,
        Action onTerraform,
        Action onCli,
        Action onSlack,
        Action onMcp,
        Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Dashboard) onDashboard();
        else if (this == Importer) onImporter();
        else if (this == GithubCodeUsages) onGithubCodeUsages();
        else if (this == GithubPrInsights) onGithubPrInsights();
        else if (this == GitlabCodeUsages) onGitlabCodeUsages();
        else if (this == GitlabPrInsights) onGitlabPrInsights();
        else if (this == BitbucketCodeUsages) onBitbucketCodeUsages();
        else if (this == BitbucketPrInsights) onBitbucketPrInsights();
        else if (this == Terraform) onTerraform();
        else if (this == Cli) onCli();
        else if (this == Slack) onSlack();
        else if (this == Mcp) onMcp();
        else otherwise(Value);
    }
}
