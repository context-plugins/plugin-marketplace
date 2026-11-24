using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListApiDebugSessions.
/// </summary>
public record GoogleCloudApigeeV1ListApiDebugSessionsResponse
{
    /// <summary>
    /// Page token that you can include in a ListApiDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Session info that includes debug session ID, environment ID, api proxy revision ID and the first transaction creation timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessions")]
    public IReadOnlyList<GoogleCloudApigeeV1ApiDebugSession>? Sessions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
