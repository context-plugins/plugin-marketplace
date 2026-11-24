using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Dev;

/// <summary>
/// The inputs of the GithubReleasesEpGithubReleasesGet operation.
/// </summary>
public sealed record GithubReleasesEpGithubReleasesGetRequest
{
    /// <summary>
    /// owner/name, e.g. openai/openai-python
    /// </summary>
    public required string Repo { get; init; }

    /// <summary>
    /// max releases (1-25)
    /// </summary>
    public int Limit { get; init; } = 5;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
