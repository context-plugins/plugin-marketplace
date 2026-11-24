using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// List of resource files.
/// </summary>
public record GoogleCloudApigeeV1ResourceFiles
{
    /// <summary>
    /// List of resource files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceFile")]
    public IReadOnlyList<GoogleCloudApigeeV1ResourceFile>? ResourceFile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
