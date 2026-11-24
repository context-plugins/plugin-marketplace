using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Error
{
    [JsonPropertyName("error")]
    public required string ErrorValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
