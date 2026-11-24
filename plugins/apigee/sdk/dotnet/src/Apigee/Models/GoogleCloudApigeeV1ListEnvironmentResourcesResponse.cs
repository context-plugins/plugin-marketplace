using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListEnvironmentResources
/// </summary>
public record GoogleCloudApigeeV1ListEnvironmentResourcesResponse
{
    /// <summary>
    /// List of resources files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceFile")]
    public IReadOnlyList<GoogleCloudApigeeV1ResourceFile>? ResourceFile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
