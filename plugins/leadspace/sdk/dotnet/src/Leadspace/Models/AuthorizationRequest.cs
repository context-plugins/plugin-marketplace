using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record AuthorizationRequest
{
    /// <summary>
    /// The Program ID Leadspace provided in the credentials email
    /// </summary>
    [JsonPropertyName("user")]
    public required string User { get; init; }

    /// <summary>
    /// The authentication secret Leadspace provided in the credentials email
    /// </summary>
    [JsonPropertyName("pass")]
    public required string Pass { get; init; }

    /// <summary>
    /// For API v4 services use API_GATEWAY
    /// </summary>
    [JsonPropertyName("audience")]
    public required string Audience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
