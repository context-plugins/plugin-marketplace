using System.Text.Json.Serialization;
using Cubic.Core.Models;

namespace Cubic.Models;

public record ErrorError
{
    [JsonPropertyName("error")]
    public required Error1 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
