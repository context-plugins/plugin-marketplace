using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreditInfo
{
    /// <summary>
    /// SKU of the API endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sku")]
    public string? Sku { get; init; }

    /// <summary>
    /// API endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public string? Endpoint { get; init; }

    /// <summary>
    /// Credit usage per successful API endpoint call
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public int? Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
