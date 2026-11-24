using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record DeleteBuildBatchOutput
{
    /// <summary>
    /// The status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCode")]
    public string? StatusCode { get; init; }

    /// <summary>
    /// An array of strings that contain the identifiers of the builds that were deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildsDeleted")]
    public IReadOnlyList<string>? BuildsDeleted { get; init; }

    /// <summary>
    /// An array of BuildNotDeleted objects that specify the builds that could not be deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildsNotDeleted")]
    public IReadOnlyList<BuildNotDeleted>? BuildsNotDeleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
