using Sapling.Models;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingSaveStyleRuleset operation.
/// </summary>
public sealed record SaplingSaveStyleRulesetRequest
{
    public required ApiV1StyleguideRulesetsRequest1 Body { get; init; }
}
