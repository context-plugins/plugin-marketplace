using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record AuthenticationException
{
    /// <summary>
    /// Error overview.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
