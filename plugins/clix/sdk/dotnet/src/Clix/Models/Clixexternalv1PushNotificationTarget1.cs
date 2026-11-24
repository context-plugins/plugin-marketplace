using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Clixexternalv1PushNotificationTarget1
{
    /// <summary>
    /// ID of the target device.
    /// </summary>
    [JsonPropertyName("device_id")]
    public required string DeviceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
