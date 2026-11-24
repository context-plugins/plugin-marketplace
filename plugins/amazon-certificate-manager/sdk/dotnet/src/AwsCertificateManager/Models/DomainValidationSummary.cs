using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record DomainValidationSummary
{
    /// <summary>
    /// The fully qualified domain name (FQDN) in the certificate for which this validation summary applies.
    /// </summary>
    [JsonPropertyName("DomainName")]
    public required string DomainName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveValidationConfiguration")]
    public ValidationConfiguration? ActiveValidationConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestedValidationConfiguration")]
    public ValidationConfiguration? RequestedValidationConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
