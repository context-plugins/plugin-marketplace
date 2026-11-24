using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record FindAllEntitySearchResponse
{
    /// <summary>
    /// Entity set request ID. Example: <c>entity_set_cad0a6d2dec046bd95ae900527d880e7</c>
    /// </summary>
    [JsonPropertyName("entity_set_id")]
    public required string EntitySetId { get; init; }

    /// <summary>
    /// Ranked list of entities.
    /// </summary>
    [JsonPropertyName("entities")]
    public required IReadOnlyList<EntityItem> Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
