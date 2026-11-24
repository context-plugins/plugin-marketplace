using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.AnyOf;

namespace DopeSecurity.Models;

public record PoliciesBypassUrlsRequest
{
    [JsonPropertyName("data")]
    public required Data61 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
