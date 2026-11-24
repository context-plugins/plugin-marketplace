using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record GttModifyOrderRequest
{
    /// <summary>
    /// Type of GTT order. It can be one of the following:
    /// SINGLE refers to a single-leg GTT order
    /// MULTIPLE refers to a multi-leg GTT order
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// Quantity with which the order is to be placed
    /// </summary>
    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    /// <summary>
    /// List of rules defining the conditions for each leg in the GTT order
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<GttRule> Rules { get; init; }

    /// <summary>
    /// Unique identifier of the GTT order to be modified
    /// </summary>
    [JsonPropertyName("gtt_order_id")]
    [RegularExpression("^GTT-.+$")]
    public required string GttOrderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
