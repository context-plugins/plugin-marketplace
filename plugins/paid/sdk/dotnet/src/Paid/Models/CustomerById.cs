using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerById
{
    /// <summary>
    /// The Paid customer ID
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
