using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record ApiV1StyleguideRulesetsResponse2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public bool? Created { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ruleset")]
    public Ruleset? Ruleset { get; init; }

    /// <summary>
    /// Present only when the request sent return_usage: true. characters is the billable character count the request submitted; see the return_usage request field for the exact semantics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
