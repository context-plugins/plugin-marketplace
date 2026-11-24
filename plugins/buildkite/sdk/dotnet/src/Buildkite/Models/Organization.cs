using System.Text.Json.Serialization;
using Buildkite.Core.Models;

namespace Buildkite.Models;

public record Organization
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
