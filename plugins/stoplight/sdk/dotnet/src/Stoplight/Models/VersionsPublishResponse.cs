using System.Text.Json.Serialization;
using Stoplight.Core.Models;

namespace Stoplight.Models;

public record VersionsPublishResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customDomain")]
    public string? CustomDomain { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
