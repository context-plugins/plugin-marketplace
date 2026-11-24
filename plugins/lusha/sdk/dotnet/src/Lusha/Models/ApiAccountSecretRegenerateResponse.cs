using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ApiAccountSecretRegenerateResponse
{
    /// <summary>
    /// Newly generated account webhook secret (store securely - only shown once)
    /// </summary>
    [JsonPropertyName("secret")]
    public required string Secret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
