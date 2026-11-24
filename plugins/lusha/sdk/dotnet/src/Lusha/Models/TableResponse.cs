using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record TableResponse
{
    /// <summary>
    /// Response payload for Get Table — TableDto fields plus live entity/column counts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TableStatusData? Data { get; init; }

    /// <summary>
    /// Credit usage summary for a V3 API request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing")]
    public V3Billing? Billing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
