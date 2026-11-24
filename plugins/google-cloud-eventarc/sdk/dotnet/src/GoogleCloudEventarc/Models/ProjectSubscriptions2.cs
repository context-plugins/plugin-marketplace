using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the same org as the GoogleApiSource.
/// </summary>
public record ProjectSubscriptions2
{
    /// <summary>
    /// Required. A list of projects to receive events from. All the projects must be in the same org. The listed projects should have the format project/{identifier} where identifier can be either the project id for project number. A single list may contain both formats. At most 100 projects can be listed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("list")]
    public IReadOnlyList<string>? List { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
