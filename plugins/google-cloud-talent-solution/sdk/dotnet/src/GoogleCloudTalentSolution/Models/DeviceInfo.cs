using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Models.Enums;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
/// </summary>
public record DeviceInfo
{
    /// <summary>
    /// A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Type of the device.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceType")]
    public DeviceType? DeviceType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
