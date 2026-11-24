using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IpoCancelData
{
    /// <summary>
    /// Application id that was cancelled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    /// <summary>
    /// Free-text message returned by the IPO service for the cancellation request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
