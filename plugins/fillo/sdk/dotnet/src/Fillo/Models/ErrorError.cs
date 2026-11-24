using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ErrorError
{
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
