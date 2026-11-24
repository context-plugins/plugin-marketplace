using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListCertificateDomainValidationsResponse
{
    /// <summary>
    /// A list of DomainValidationSummary objects, one for each domain on the certificate. Each object contains the domain name and its active and requested validation configurations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainValidationSummaryList")]
    public IReadOnlyList<DomainValidationSummary>? DomainValidationSummaryList { get; init; }

    /// <summary>
    /// If the number of results exceeds MaxItems, this token is included in the response. Use this token in a subsequent ListCertificateDomainValidations request to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
