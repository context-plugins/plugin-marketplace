using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingDeleteStyleRuleset operation.
/// </summary>
public sealed record SaplingDeleteStyleRulesetRequest
{
    /// <summary>
    /// Rule set name (alternatively in the body).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Sapling API key, as an alternative to the "Authorization: Bearer &lt;key&gt;" header.
    /// </summary>
    public string? Key { get; init; }

    public ApiV1StyleguideRulesetsRequest? Body { get; init; }
}
