using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The configuration template for the plugin.
/// </summary>
public record GoogleCloudApihubV1ConfigTemplate2
{
    /// <summary>
    /// Optional. The list of additional configuration variables for the plugin's configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalConfigTemplate")]
    public IReadOnlyList<GoogleCloudApihubV1ConfigVariableTemplate>? AdditionalConfigTemplate { get; init; }

    /// <summary>
    /// Optional. The authentication template for the plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authConfigTemplate")]
    public GoogleCloudApihubV1AuthConfigTemplate2? AuthConfigTemplate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
