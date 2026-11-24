using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record GttPlaceOrderRequest
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
    /// Signifies if the order was either Intraday, Delivery or MTF
    /// </summary>
    [JsonPropertyName("product")]
    public required Product3 Product { get; init; }

    /// <summary>
    /// List of rules defining the conditions for each leg in the GTT order
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<GttRule> Rules { get; init; }

    /// <summary>
    /// Key of the instrument
    /// </summary>
    [JsonPropertyName("instrument_token")]
    public required string InstrumentToken { get; init; }

    /// <summary>
    /// Indicates whether its a buy or sell order
    /// </summary>
    [JsonPropertyName("transaction_type")]
    public required TransactionType TransactionType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
