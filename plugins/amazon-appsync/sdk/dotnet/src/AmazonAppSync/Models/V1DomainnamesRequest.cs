using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1DomainnamesRequest
{
    /// <summary>
    /// The domain name.
    /// </summary>
    [JsonPropertyName("domainName")]
    public required string DomainName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
    /// </summary>
    [JsonPropertyName("certificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// A description of the DomainName.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
