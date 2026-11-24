namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingListStyleRulesets operation.
/// </summary>
public sealed record SaplingListStyleRulesetsRequest
{
    public bool ReturnUsage { get; init; } = false;
}
