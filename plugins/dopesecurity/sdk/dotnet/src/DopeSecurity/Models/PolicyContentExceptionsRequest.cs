using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Request body for updating user/group exceptions on categories
/// </summary>
public record PolicyContentExceptionsRequest
{
    [JsonPropertyName("data")]
    public required Data2FlightdeckDopeSecurityPublicApiSpecification Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
