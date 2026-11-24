using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Simple message response for operations like delete.
/// </summary>
public record MessageResponse
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
