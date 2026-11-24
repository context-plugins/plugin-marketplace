using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.AnyOf;

namespace DopeSecurity.Models;

public record PoliciesBypassApplicationsRequest
{
    [JsonPropertyName("data")]
    public required Data81 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
