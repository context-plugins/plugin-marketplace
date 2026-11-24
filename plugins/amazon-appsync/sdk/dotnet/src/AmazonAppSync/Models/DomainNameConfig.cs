using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DomainNameConfig
{
    /// <summary>
    /// The domain name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domainName")]
    public string? DomainName { get; init; }

    /// <summary>
    /// A description of the DomainName configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certificateArn")]
    public string? CertificateArn { get; init; }

    /// <summary>
    /// The domain name that AppSync provides.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appsyncDomainName")]
    public string? AppsyncDomainName { get; init; }

    /// <summary>
    /// The ID of your Amazon Route 53 hosted zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostedZoneId")]
    public string? HostedZoneId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the domain name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domainNameArn")]
    public string? DomainNameArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
