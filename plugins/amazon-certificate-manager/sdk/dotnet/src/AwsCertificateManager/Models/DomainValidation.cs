using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record DomainValidation
{
    /// <summary>
    /// A fully qualified domain name (FQDN) in the certificate. For example, www.example.com or example.com.
    /// </summary>
    [JsonPropertyName("DomainName")]
    public required string DomainName { get; init; }

    /// <summary>
    /// A list of email addresses that ACM used to send domain validation emails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationEmails")]
    public IReadOnlyList<string>? ValidationEmails { get; init; }

    /// <summary>
    /// The domain name that ACM used to send domain validation emails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationDomain")]
    public string? ValidationDomain { get; init; }

    /// <summary>
    /// The validation status of the domain name. This can be one of the following values: PENDING_VALIDATION SUCCESS FAILED
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationStatus")]
    public ValidationStatus? ValidationStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceRecord")]
    public ResourceRecord? ResourceRecord { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HttpRedirect")]
    public HttpRedirect? HttpRedirect { get; init; }

    /// <summary>
    /// Specifies the domain validation method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod? ValidationMethod { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
