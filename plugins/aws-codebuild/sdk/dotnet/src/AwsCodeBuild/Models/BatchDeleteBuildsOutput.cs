using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchDeleteBuildsOutput
{
    /// <summary>
    /// The IDs of the builds that were successfully deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildsDeleted")]
    public IReadOnlyList<string>? BuildsDeleted { get; init; }

    /// <summary>
    /// Information about any builds that could not be successfully deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildsNotDeleted")]
    public IReadOnlyList<BuildNotDeleted>? BuildsNotDeleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
