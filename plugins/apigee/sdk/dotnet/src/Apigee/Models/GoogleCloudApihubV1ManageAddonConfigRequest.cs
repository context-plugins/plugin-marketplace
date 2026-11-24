using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The ManageAddonConfig method's request.
/// </summary>
public record GoogleCloudApihubV1ManageAddonConfigRequest
{
    /// <summary>
    /// Required. The config of the addon to be managed. This config will replace the config present in the addon. The type of the config should match the config type already present in the addon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public GoogleCloudApihubV1AddonConfig2? Config { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
