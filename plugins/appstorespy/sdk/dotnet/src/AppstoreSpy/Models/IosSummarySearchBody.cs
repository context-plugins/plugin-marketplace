using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record IosSummarySearchBody
{
    /// <summary>
    /// Query
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("q")]
    public string? Q { get; init; }

    [JsonPropertyName("filter")]
    public required SearchFilterIos Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
