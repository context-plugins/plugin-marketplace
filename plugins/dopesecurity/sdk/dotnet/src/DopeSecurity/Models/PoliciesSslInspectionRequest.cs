using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PoliciesSslInspectionRequest
{
    [JsonPropertyName("data")]
    public required Data10 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
