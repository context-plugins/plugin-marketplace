using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditGrantCustomer
{
    /// <summary>
    /// Stable Paid customer display ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Customer ID from the caller's system, if set.
    /// </summary>
    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
