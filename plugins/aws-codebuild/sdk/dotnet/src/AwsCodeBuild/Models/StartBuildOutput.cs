using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record StartBuildOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build")]
    public Build? Build { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
