using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Clixexternalv1LiveActivityTarget2
{
    /// <summary>
    /// ID of the target user.
    /// </summary>
    [JsonPropertyName("user_id")]
    public required string UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
