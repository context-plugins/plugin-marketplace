using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record EntitiesAddResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data2? Data { get; init; }

    /// <summary>
    /// Credit usage summary for a V3 API request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing")]
    public V3Billing? Billing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
