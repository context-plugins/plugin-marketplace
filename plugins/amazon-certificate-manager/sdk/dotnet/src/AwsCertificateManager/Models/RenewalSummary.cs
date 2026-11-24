using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record RenewalSummary
{
    /// <summary>
    /// The status of ACM's managed renewal of the certificate.
    /// </summary>
    [JsonPropertyName("RenewalStatus")]
    public required RenewalStatus2 RenewalStatus { get; init; }

    /// <summary>
    /// Contains information about the validation of each domain name in the certificate, as it pertains to ACM's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED.
    /// </summary>
    [JsonPropertyName("DomainValidationOptions")]
    public required IReadOnlyList<DomainValidation> DomainValidationOptions { get; init; }

    /// <summary>
    /// The reason that a renewal request was unsuccessful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RenewalStatusReason")]
    public RenewalStatusReason? RenewalStatusReason { get; init; }

    /// <summary>
    /// The time at which the renewal summary was last updated.
    /// </summary>
    [JsonPropertyName("UpdatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
