using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The response for ListAsyncQueries.
/// </summary>
public record GoogleCloudApigeeV1ListAsyncQueriesResponse
{
    /// <summary>
    /// The asynchronous queries belong to requested resource name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queries")]
    public IReadOnlyList<GoogleCloudApigeeV1AsyncQuery>? Queries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
