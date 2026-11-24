using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Target
{
    /// <summary>
    /// Target user by project user ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_user_id")]
    public string? ProjectUserId { get; init; }

    /// <summary>
    /// Target specific device
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_id")]
    public string? DeviceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
