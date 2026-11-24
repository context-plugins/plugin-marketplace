using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record PreviewServiceOptionsRequest
{
    /// <summary>
    /// The unique identifier of the store to preview service options for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("store_id")]
    public string? StoreId { get; init; }

    /// <summary>
    /// The delivery or pickup address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
