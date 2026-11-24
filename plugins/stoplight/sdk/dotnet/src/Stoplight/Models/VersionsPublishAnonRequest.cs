using System.Text.Json.Serialization;
using Stoplight.Core.Models;
using Stoplight.Models.AnyOf;

namespace Stoplight.Models;

public record VersionsPublishAnonRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specData")]
    public SpecData? SpecData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
