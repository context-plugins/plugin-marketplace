using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Response data for Cancel order request
/// </summary>
public record CancelOrderData1
{
    /// <summary>
    /// Reference order ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
