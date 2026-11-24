using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record UserById
{
    /// <summary>
    /// Unique user identifier.
    /// </summary>
    [JsonPropertyName("user_id")]
    public required string UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
