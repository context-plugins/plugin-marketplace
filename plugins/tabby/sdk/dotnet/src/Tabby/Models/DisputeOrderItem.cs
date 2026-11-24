using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record DisputeOrderItem
{
    /// <summary>
    /// Reference id from payment.
    /// </summary>
    [JsonPropertyName("reference_id")]
    public required string ReferenceId { get; init; }

    /// <summary>
    /// Order item title.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Order item unit price.
    /// </summary>
    [JsonPropertyName("unit_price")]
    public required string UnitPrice { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
