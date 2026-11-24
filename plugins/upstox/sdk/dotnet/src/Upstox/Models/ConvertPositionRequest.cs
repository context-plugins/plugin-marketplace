using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record ConvertPositionRequest
{
    /// <summary>
    /// Key of the instrument
    /// </summary>
    [JsonPropertyName("instrument_token")]
    public required string InstrumentToken { get; init; }

    /// <summary>
    /// Indicates the new product to use for the convert positions
    /// </summary>
    [JsonPropertyName("new_product")]
    public required NewProduct NewProduct { get; init; }

    /// <summary>
    /// Indicates the old product to use for the convert positions
    /// </summary>
    [JsonPropertyName("old_product")]
    public required OldProduct OldProduct { get; init; }

    /// <summary>
    /// Indicates whether its a buy(b) or sell(s) order
    /// </summary>
    [JsonPropertyName("transaction_type")]
    public required TransactionTypeOpenApiDefinitionPortfolioApi TransactionType { get; init; }

    /// <summary>
    /// Quantity with which the position to convert
    /// </summary>
    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
