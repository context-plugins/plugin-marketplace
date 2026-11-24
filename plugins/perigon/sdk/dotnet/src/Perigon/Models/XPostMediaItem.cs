using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record XPostMediaItem
{
    [JsonPropertyName("mediaUrlHttps")]
    public required string MediaUrlHttps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
