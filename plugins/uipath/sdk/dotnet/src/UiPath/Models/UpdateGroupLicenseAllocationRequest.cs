using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for updating license allocation for a group
/// </summary>
public record UpdateGroupLicenseAllocationRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userLicenses")]
    public IReadOnlyList<LicenseAllocationEntry>? UserLicenses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
