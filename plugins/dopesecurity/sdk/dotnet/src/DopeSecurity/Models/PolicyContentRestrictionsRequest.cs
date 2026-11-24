using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Request body for updating restrictions on dope and custom categories
/// </summary>
public record PolicyContentRestrictionsRequest
{
    [JsonPropertyName("data")]
    public required DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
