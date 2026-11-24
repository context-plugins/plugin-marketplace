using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchGetFleetsInput
{
    /// <summary>
    /// The names or ARNs of the compute fleets.
    /// </summary>
    [JsonPropertyName("names")]
    public required IReadOnlyList<string> Names { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
