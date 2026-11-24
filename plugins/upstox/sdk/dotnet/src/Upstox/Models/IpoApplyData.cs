using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IpoApplyData
{
    /// <summary>
    /// Application id created for this IPO application. Pass this as order_id to the get-order and cancel-order APIs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_id")]
    public string? OrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
