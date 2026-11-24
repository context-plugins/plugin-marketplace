using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record IpoBidRequest
{
    /// <summary>
    /// Number of shares bid for. Must be a multiple of the IPO's <c>lot_size</c> and at least its <c>minimum_quantity</c>
    /// </summary>
    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    /// <summary>
    /// Bid price per share, in whole rupees — decimals are not accepted. Must sit within the IPO's price band, or equal its <c>cut_off_price</c>
    /// </summary>
    [JsonPropertyName("price")]
    public required double Price { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
