using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Response data for GTT order request
/// </summary>
public record GttOrderData2
{
    /// <summary>
    /// Order ID for the placed GTT order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gtt_order_ids")]
    public IReadOnlyList<string>? GttOrderIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
