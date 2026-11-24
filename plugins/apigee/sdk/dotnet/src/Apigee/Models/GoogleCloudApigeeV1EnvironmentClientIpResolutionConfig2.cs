using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other features that use the client ip. To remove a client ip resolution config, update the field to an empty value. Example: '{ "clientIpResolutionConfig" = {} }' For more information, see: https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution.
/// </summary>
public record GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2
{
    /// <summary>
    /// Resolves the client ip based on a custom header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerIndexAlgorithm")]
    public GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm? HeaderIndexAlgorithm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
