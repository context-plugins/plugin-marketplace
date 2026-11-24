using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record Expiration
{
    /// <summary>
    /// The numeric value of the expiration.
    /// </summary>
    [JsonPropertyName("Value")]
    public required int Value { get; init; }

    /// <summary>
    /// The time unit for the expiration value.
    /// </summary>
    [JsonPropertyName("Type")]
    public required TypeEnum Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
