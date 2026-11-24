using System.Text.Json.Serialization;
using Leadspace.Core.Models;
using Leadspace.Models.Enums;

namespace Leadspace.Models;

public record Score
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucket")]
    public Bucket? Bucket { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
