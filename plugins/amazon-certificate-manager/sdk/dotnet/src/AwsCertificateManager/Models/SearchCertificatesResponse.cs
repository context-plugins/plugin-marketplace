using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record SearchCertificatesResponse
{
    /// <summary>
    /// A list of certificate search results containing certificate ARNs, X.509 attributes, and ACM metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Results")]
    public IReadOnlyList<CertificateSearchResult>? Results { get; init; }

    /// <summary>
    /// When the list is truncated, this value is present and contains the value to use for the NextToken parameter in a subsequent pagination request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
