using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates additional information about query execution.
/// </summary>
public record GoogleCloudApigeeV1Metadata
{
    /// <summary>
    /// List of error messages as strings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<string>? Errors { get; init; }

    /// <summary>
    /// List of additional information such as data source, if result was truncated. For example: ``` "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]```
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notices")]
    public IReadOnlyList<string>? Notices { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
