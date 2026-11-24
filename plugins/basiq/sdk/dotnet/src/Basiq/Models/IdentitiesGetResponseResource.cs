using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing details for identities.
/// </summary>
public record IdentitiesGetResponseResource
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<DatumIdentityIdentitiesApi> Data { get; init; }

    /// <summary>
    /// Type, always "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Count of the identities in the response.
    /// </summary>
    [JsonPropertyName("count")]
    public required long Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
