using System.Text.Json.Serialization;
using Stoplight.Core.Models;

namespace Stoplight.Models;

public record VersionsImportResponse
{
    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
