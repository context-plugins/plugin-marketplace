using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ProductByExternalId
{
    /// <summary>
    /// Your external product ID
    /// </summary>
    [JsonPropertyName("externalProductId")]
    public required string ExternalProductId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
