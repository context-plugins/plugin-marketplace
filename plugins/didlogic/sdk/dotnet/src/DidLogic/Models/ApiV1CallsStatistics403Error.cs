using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1CallsStatistics403Error
{
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
