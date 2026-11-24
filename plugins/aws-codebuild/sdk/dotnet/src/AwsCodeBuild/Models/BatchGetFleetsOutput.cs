using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetFleetsOutput
{
    /// <summary>
    /// Information about the requested compute fleets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fleets")]
    public IReadOnlyList<Fleet>? Fleets { get; init; }

    /// <summary>
    /// The names of compute fleets for which information could not be found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fleetsNotFound")]
    public IReadOnlyList<string>? FleetsNotFound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
