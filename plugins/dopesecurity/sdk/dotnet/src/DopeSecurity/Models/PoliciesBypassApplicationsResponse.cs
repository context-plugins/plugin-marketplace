using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PoliciesBypassApplicationsResponse
{
    [JsonPropertyName("data")]
    public required Data7 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
