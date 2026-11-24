using System.Text.Json.Serialization;
using Stoplight.Core.Models;

namespace Stoplight.Models;

public record VersionsUnpublishResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
