using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListTraceConfigOverrides.
/// </summary>
public record GoogleCloudApigeeV1ListTraceConfigOverridesResponse
{
    /// <summary>
    /// Token value that can be passed as <c>page_token</c> to retrieve the next page of content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// List all trace configuration overrides in an environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceConfigOverrides")]
    public IReadOnlyList<GoogleCloudApigeeV1TraceConfigOverride>? TraceConfigOverrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
