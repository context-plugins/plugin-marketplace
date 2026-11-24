using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Credentials for user authentication.
/// </summary>
public record LoginRequest
{
    /// <summary>
    /// User credential object.
    /// </summary>
    [JsonPropertyName("user")]
    public required User2 User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
