using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record InvalidInputException
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
