using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record GttCancelOrderRequest
{
    /// <summary>
    /// Unique identifier of the GTT order to be cancelled
    /// </summary>
    [JsonPropertyName("gtt_order_id")]
    [RegularExpression("^GTT-.+$")]
    public required string GttOrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
