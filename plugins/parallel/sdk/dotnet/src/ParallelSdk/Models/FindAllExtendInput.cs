using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Input model for FindAll extend.
/// </summary>
public record FindAllExtendInput
{
    /// <summary>
    /// Additional number of matches to find for this FindAll run. This value will be added to the current match limit to determine the new total match limit. Must be greater than 0.
    /// </summary>
    [JsonPropertyName("additional_match_limit")]
    public required int AdditionalMatchLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
