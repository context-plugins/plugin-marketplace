using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Models;

/// <summary>
/// Detailed information about an OTA update.
/// </summary>
public record OtaUpdateInfo
{
    /// <summary>
    /// An over-the-air (OTA) firmware update job for FreeRTOS devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otaUpdateInfo")]
    public OtaUpdate? OtaUpdateInfoValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
