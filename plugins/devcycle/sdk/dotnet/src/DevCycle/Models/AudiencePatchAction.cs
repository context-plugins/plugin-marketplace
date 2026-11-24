using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AudiencePatchAction
{
    /// <summary>
    /// An array of values is required for all filters except when the comparator is 'exist' or '!exist'
    /// </summary>
    [JsonPropertyName("values")]
    public required object Values { get; init; }

    [JsonPropertyName("filterIndex")]
    public required string FilterIndex { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
