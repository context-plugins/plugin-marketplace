using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerByExternalId
{
    /// <summary>
    /// Your external customer ID
    /// </summary>
    [JsonPropertyName("externalCustomerId")]
    public required string ExternalCustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
