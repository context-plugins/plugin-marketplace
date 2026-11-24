using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

public record ViewerStatusRequest
{
    /// <summary>
    /// Semrush user ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_id")]
    public int? UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
