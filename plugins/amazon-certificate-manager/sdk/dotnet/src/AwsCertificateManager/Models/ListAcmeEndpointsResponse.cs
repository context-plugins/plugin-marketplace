using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListAcmeEndpointsResponse
{
    /// <summary>
    /// The list of ACME endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeEndpoints")]
    public IReadOnlyList<AcmeEndpointSummary>? AcmeEndpoints { get; init; }

    /// <summary>
    /// A token for pagination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
