using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for SetAddons.
/// </summary>
public record GoogleCloudApigeeV1SetAddonsRequest
{
    /// <summary>
    /// Required. Add-on configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addonsConfig")]
    public GoogleCloudApigeeV1AddonsConfig1? AddonsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
