using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Encapsulates a response format for JavaScript Optimized Scenario.
/// </summary>
public record GoogleCloudApigeeV1OptimizedStats
{
    /// <summary>
    /// Wraps the <c>stats</c> response for JavaScript Optimized Scenario with a response key. For example: ```{ "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres", "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data": [ { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }, { "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }```
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Response")]
    public GoogleCloudApigeeV1OptimizedStatsResponse2? Response { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
