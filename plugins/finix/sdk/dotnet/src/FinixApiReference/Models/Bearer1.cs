using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// A bearer authentication configuration.
/// </summary>
public record Bearer1
{
    /// <summary>
    /// The string that Finix will send as the bearer token.
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
