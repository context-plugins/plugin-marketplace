using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Clixexternalv1LiveActivityTarget
{
    /// <summary>
    /// Project-specific user ID for targeting.
    /// </summary>
    [JsonPropertyName("project_user_id")]
    public required string ProjectUserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
