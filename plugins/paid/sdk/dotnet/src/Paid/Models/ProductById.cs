using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ProductById
{
    /// <summary>
    /// The Paid product ID
    /// </summary>
    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
