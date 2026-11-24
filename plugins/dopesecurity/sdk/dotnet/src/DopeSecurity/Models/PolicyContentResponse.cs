using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PolicyContentResponse
{
    [JsonPropertyName("data")]
    public required Data1FlightdeckDopeSecurityPublicApiSpecification Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
