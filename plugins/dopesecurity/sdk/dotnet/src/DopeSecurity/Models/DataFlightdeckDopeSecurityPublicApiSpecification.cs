using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record DataFlightdeckDopeSecurityPublicApiSpecification
{
    /// <summary>
    /// Information about current and next page for cursor based pagination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageInfo")]
    public PaginationResponse? PageInfo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoints")]
    public IReadOnlyList<Endpoint>? Endpoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
