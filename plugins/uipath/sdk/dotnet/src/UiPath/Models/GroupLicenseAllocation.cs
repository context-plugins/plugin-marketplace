using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// License allocation rule for a user group
/// </summary>
public record GroupLicenseAllocation
{
    /// <summary>
    /// Unique identifier of the group this allocation applies to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupId")]
    public string? GroupId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userLicenses")]
    public IReadOnlyList<LicenseAllocationEntry>? UserLicenses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
