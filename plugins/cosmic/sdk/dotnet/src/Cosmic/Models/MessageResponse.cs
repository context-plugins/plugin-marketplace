using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

/// <summary>
/// Returned by delete operations.
/// </summary>
public record MessageResponse
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
