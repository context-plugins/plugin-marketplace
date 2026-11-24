using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record ValidationConfiguration
{
    /// <summary>
    /// The validation method for this configuration. Valid values: DNS – Validation using a CNAME record added to your DNS configuration. EMAIL – Validation using an approval email sent to domain contacts. HTTP – Validation using an HTTP resource placed on your web server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod1AwsCertificateManagerOperationsApi? ValidationMethod { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationChallenge")]
    public ValidationChallenge? ValidationChallenge { get; init; }

    /// <summary>
    /// The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting for validation to complete. SUCCESS – Validation completed successfully. FAILED – Validation failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationStatus")]
    public ValidationStatusAwsCertificateManagerOperationsApi? ValidationStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
