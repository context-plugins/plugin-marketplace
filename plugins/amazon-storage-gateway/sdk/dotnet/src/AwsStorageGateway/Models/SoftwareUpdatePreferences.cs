using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record SoftwareUpdatePreferences
{
    /// <summary>
    /// Indicates the automatic update policy for a gateway. ALL_VERSIONS - Enables regular gateway maintenance updates. EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates. The gateway will still receive emergency version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be notified before an emergency version update is applied. These updates are applied during your gateway's scheduled maintenance window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutomaticUpdatePolicy")]
    public AutomaticUpdatePolicy? AutomaticUpdatePolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
