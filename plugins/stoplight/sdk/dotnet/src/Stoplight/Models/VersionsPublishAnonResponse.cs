using System.Text.Json.Serialization;
using Stoplight.Core.Models;

namespace Stoplight.Models;

public record VersionsPublishAnonResponse
{
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
