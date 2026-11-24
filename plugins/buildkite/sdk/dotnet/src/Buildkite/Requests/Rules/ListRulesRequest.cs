namespace Buildkite.Requests.Rules;

/// <summary>
/// The inputs of the ListRules operation.
/// </summary>
public sealed record ListRulesRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
