using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfolioRemoveItemRequest
{
    /// <summary>
    /// The item to remove from the portfolio.
    /// </summary>
    [JsonPropertyName("item")]
    public required string Item { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
