using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record UpdateSummary
{
    /// <summary>
    /// The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION – The certificate update is waiting for domain ownership validation to complete. SUCCESS – The certificate was updated successfully. FAILED – The certificate update failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status3? Status { get; init; }

    /// <summary>
    /// The type of update that was requested for the certificate. The following are valid values: DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type3? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainValidationMethodUpdateSummary")]
    public DomainValidationMethodUpdateSummary? DomainValidationMethodUpdateSummary { get; init; }

    /// <summary>
    /// The time at which the certificate update was requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequestedAt")]
    public DateTimeOffset? RequestedAt { get; init; }

    /// <summary>
    /// The time at which the certificate update status was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UpdatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
