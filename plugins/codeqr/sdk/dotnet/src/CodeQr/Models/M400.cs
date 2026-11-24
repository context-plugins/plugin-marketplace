using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record M400
{
    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
