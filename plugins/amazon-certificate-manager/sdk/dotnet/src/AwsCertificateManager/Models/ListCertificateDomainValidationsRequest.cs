using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListCertificateDomainValidationsRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the certificate for which to list domain validation summaries.
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// A token returned by a previous call to ListCertificateDomainValidations. If the number of results exceeds MaxItems, use this token to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of domain validation summaries to return. If you don't specify a value, the default is 1000.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxItems")]
    public int? MaxItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
