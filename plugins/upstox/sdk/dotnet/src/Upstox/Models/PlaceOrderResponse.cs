using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record PlaceOrderResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Response data for place order request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public PlaceOrderData1? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
