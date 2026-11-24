using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// The List tenants response object.
/// </summary>
public record ListTenantsResponse
{
    /// <summary>
    /// Additional information for the API invocation, such as the request tracking id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public ResponseMetadata1? Metadata { get; init; }

    /// <summary>
    /// Tenants for the current client.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tenants")]
    public IReadOnlyList<Tenant>? Tenants { get; init; }

    /// <summary>
    /// A token to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
