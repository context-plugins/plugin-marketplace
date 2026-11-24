using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ApiAccountSecretResponse
{
    /// <summary>
    /// Current account webhook secret
    /// </summary>
    [JsonPropertyName("secret")]
    public required string Secret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
